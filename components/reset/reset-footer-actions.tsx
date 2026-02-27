import type { ReactNode } from "react";

type ResetFooterActionsProps = {
  leftAction?: ReactNode;
  rightAction: ReactNode;
};

export function ResetFooterActions({
  leftAction,
  rightAction,
}: ResetFooterActionsProps) {
  return (
    <div className="flex flex-wrap items-center gap-3 pt-1">
      {leftAction ? <div>{leftAction}</div> : null}
      <div className="flex-1" />
      <div>{rightAction}</div>
    </div>
  );
}

