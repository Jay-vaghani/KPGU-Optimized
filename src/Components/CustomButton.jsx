import { Button } from "@nextui-org/button";
import React from "react";

const CustomButton = ({
  content,
  color = "primary",
  variant = "solid",
  icon,
  iconPosition,
  type,
  navLink,
  hrefLink,
  phoneLink,
  emailLink,
  isLoading = false
}) => {
  return (
    <>
      <Button color={color} variant={variant} isLoading={isLoading}>
        hello
      </Button>
    </>
  );
};

export default CustomButton;
