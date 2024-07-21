"use client";
import { TextSize, TextWeight } from "@/types/text-types";
import styled from "styled-components";

interface TextProps {
  children: React.ReactNode;
  size?: TextSize;
  color?: string;
  weight?: TextWeight;
}

const StyledText = styled.div<TextProps>`
  font-size: ${(props) => {
    switch (props.size) {
      case TextSize.Small:
        return "12px";
      case TextSize.Large:
        return "24px";
      case TextSize.Medium:
      default:
        return "16px";
    }
  }};
  color: ${(props) => props.color || "white"};
  font-weight: ${(props) =>
    props.weight === TextWeight.Bold ? "bold" : "normal"};
`;

const Text: React.FC<TextProps> = ({
  children,
  size = TextSize.Medium,
  color = "white",
  weight = TextWeight.Normal,
}) => {
  return (
    <StyledText size={size} color={color} weight={weight}>
      {children}
    </StyledText>
  );
};

export default Text;
