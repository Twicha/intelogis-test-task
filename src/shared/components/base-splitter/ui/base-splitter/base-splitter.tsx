import {
  FC,
  MouseEvent,
  ReactElement,
  TouchEvent,
  useRef,
  useState,
} from "react";

import classNames from "classnames";

import "./base-splitter.scss";

interface Props {
  className?: string;
  leftSlot: ReactElement;
  rightSlot: ReactElement;
  onStart?: () => void;
  onEnd?: () => void;
}

export const BaseSplitter: FC<Props> = ({
  className,
  leftSlot,
  rightSlot,
  onStart,
  onEnd,
}): ReactElement => {
  const leftItemRef = useRef<HTMLDivElement | null>(null);

  const rightItemRef = useRef<HTMLDivElement | null>(null);

  const [isCatch, setIsCatch] = useState<boolean>(false);

  const [leftItemOldWidth, setLeftItemOldWidth] = useState<number>();

  const [rightItemOldWidth, setRightItemOldWidth] = useState<number>();

  const [rightItemWidth, setRightItemWidth] = useState<number>();

  const [startCoords, setStartCoords] = useState<number>();

  const onMouseDownHandler = (e: MouseEvent | TouchEvent) => {
    const clientX =
      (e as MouseEvent).clientX ||
      (e as TouchEvent).changedTouches?.[0].clientX;

    setStartCoords(clientX);

    setLeftItemOldWidth(leftItemRef.current?.offsetWidth || 0);

    setRightItemOldWidth(rightItemRef.current?.offsetWidth || 0);

    setIsCatch(true);

    if (onStart) {
      onStart();
    }
  };

  const onMouseUpHandler = (e: MouseEvent | TouchEvent) => {
    setStartCoords(undefined);

    setIsCatch(false);

    if (onEnd) {
      onEnd();
    }
  };

  const onMouseMoveHandler = (e: MouseEvent | TouchEvent) => {
    if (
      isCatch &&
      startCoords !== undefined &&
      leftItemOldWidth !== undefined &&
      rightItemOldWidth !== undefined
    ) {
      const clientX =
        (e as MouseEvent).clientX ||
        (e as TouchEvent).changedTouches?.[0].clientX ||
        0;

      const delta: number = clientX - startCoords;

      setRightItemWidth(rightItemOldWidth - delta);
    }
  };

  return (
    <div
      className={classNames("base-splitter", className)}
      onMouseMove={onMouseMoveHandler}
      onMouseUp={onMouseUpHandler}
      onMouseLeave={onMouseUpHandler}
      onTouchMove={onMouseMoveHandler}
      onTouchEnd={onMouseUpHandler}
      onTouchCancel={onMouseUpHandler}
    >
      <div
        ref={leftItemRef}
        className="base-splitter__item base-splitter__item--left"
        style={
          rightItemWidth !== undefined
            ? {
                width: `calc(100% - var(--splitter-btn-width) - ${rightItemWidth}px)`,
              }
            : undefined
        }
      >
        {leftSlot}
      </div>
      <button
        type="button"
        className="base-splitter__btn"
        onMouseDown={onMouseDownHandler}
        onTouchStart={onMouseDownHandler}
      />
      <div
        ref={rightItemRef}
        className="base-splitter__item base-splitter__item--right"
        style={
          rightItemWidth !== undefined
            ? { width: rightItemWidth + "px" }
            : undefined
        }
      >
        {rightSlot}
      </div>
    </div>
  );
};
