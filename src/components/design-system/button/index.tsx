"use client";
import { ButtonSize, ButtonVariant } from "@/types/button-types";
import styled from "styled-components";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (e: MouseEvent) => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullwidth?: boolean;
}

const StyledButton = styled.button<ButtonProps>`
  padding: ${(props) => {
    switch (props.size) {
      case ButtonSize.ExtraSmall:
        return "2px 8px";
      case ButtonSize.Small:
        return "8px 16px";
      case ButtonSize.Large:
        return "16px 32px";
      case ButtonSize.None:
        return "0px 0px";
      case ButtonSize.Medium:
      default:
        return "12px 24px";
    }
  }};
  font-size: ${(props) => {
    switch (props.size) {
      case ButtonSize.ExtraSmall:
        return "12px";
      case ButtonSize.Small:
        return "12px";
      case ButtonSize.Large:
        return "18px";
      case ButtonSize.Medium:
      default:
        return "14px";
    }
  }};
  color: ${(props) => {
    switch (props.variant) {
      case ButtonVariant.Primary:
        return "#000";
      case ButtonVariant.Secondary:
        return "#fff";
      case ButtonVariant.Transparent:
        return "#0070f3";
      case ButtonVariant.Warning:
        return "#fff";
      default:
        return "#0070f3";
    }
  }};
  background-color: ${(props) => {
    switch (props.variant) {
      case ButtonVariant.Primary:
        return "#ccc";
      case ButtonVariant.Secondary:
        return "#0070f3";
      case ButtonVariant.Transparent:
        return "transparent";
      case ButtonVariant.Warning:
        return "#D11A2A";
      default:
        return "transparent";
    }
  }};
  width: ${(props) => (props.fullwidth ? "100%" : "auto")};
  height: fit-content;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => {
      switch (props.variant) {
        case ButtonVariant.Primary:
          return "#bbb";
        case ButtonVariant.Secondary:
          return "#005bb5";
        case ButtonVariant.Transparent:
          return "transparent";
        case ButtonVariant.Warning:
          return "#D11A2A";
        default:
          return "transparent";
      }
    }};
  }
`;

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = ButtonVariant.Primary,
  size = ButtonSize.Medium,
  fullwidth = false,
}) => {
  return (
    <StyledButton
      onClick={onClick}
      variant={variant}
      size={size}
      fullwidth={fullwidth || undefined}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
