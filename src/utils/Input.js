export const Action = {
  Left: "Left",
  FastDrop: "FastDrop",
  Pause: "Pause",
  Quit: "Quit",
  Right: "Right",
  RotateAntiClockwise: "RotateAntiClockwise",
  RotateClockwise: "RotateClockwise",
  SlowDrop: "SlowDrop",
};

export const Key = {
  ArrowUp: Action.RotateAntiClockwise,
  ArrowDown: Action.RotateClockwise,
  ArrowLeft: Action.Left,
  ArrowRight: Action.Right,
  KeyQ: Action.Quit,
  KeyP: Action.Pause,
  Space: Action.FastDrop,
};

export const actionIsDrop = (action) =>
  [Action.SlowDrop, Action.FastDrop].includes(action);

export const actionForKey = (keyCode) => Key[keyCode];
