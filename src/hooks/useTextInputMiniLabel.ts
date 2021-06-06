import React, { useEffect, useRef, useState } from 'react';

interface IUseTextInputMiniLabelArgs<T> {
  onFocus?: (event: React.FocusEvent<T>) => void;
  onBlur?: (event: React.FocusEvent<T>) => void;
  onKeyDown?: (event: React.KeyboardEvent<T>) => void;
  value?: number | string;
}

interface IUseTextInputMiniLabelReturn<T> {
  handleInputFocus: (event: React.FocusEvent<T>) => void;
  handleInputBlur: (event: React.FocusEvent<T>) => void;
  handleKeyDown: (event: React.KeyboardEvent<T>) => void;
  useMiniLabel: boolean;
  isFocus: boolean;
  ref: React.MutableRefObject<T | null>;
}

export const useTextInputMiniLabel = <
  T extends HTMLTextAreaElement | HTMLInputElement
>(
  args: IUseTextInputMiniLabelArgs<T>
): IUseTextInputMiniLabelReturn<T> => {
  const refElement = useRef<T | null>(null);
  const [useMiniLabel, setUseMiniLabel] = useState<boolean>(false);
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const handleInputFocus = (event: React.FocusEvent<T>) => {
    args.onFocus && args.onFocus(event);
    setUseMiniLabel(true);
    setIsFocus(true);
  };
  const handleInputBlur = (event: React.FocusEvent<T>) => {
    args.onBlur && args.onBlur(event);
    if (String(args.value).length === 0) setUseMiniLabel(false);
    setIsFocus(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<T>) => {
    args.onKeyDown && args.onKeyDown(event);
    if (event.key.toLowerCase() === 'escape') {
      refElement.current?.blur();
    }
  };

  useEffect(() => {
    if (!isFocus) setUseMiniLabel(String(args.value).length > 0);
  }, [args.value]);

  return {
    handleInputFocus,
    handleInputBlur,
    handleKeyDown,
    useMiniLabel,
    isFocus,
    ref: refElement,
  };
};
