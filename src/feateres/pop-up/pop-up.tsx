import React from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../hook";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { clearPopUp } from "./pop-up.slice";

type Props = {
  isDialogOpen: boolean;
};

export const PostImagePreview: React.FC<Props> = ({ isDialogOpen }) => {
  const { message } = useAppSelector((state) => state.popUp);
  const dispatch = useAppDispatch();
  return (
    <Popup
      contentStyle={{
        width: "400px",
        padding: "10px 20px",
        borderRadius: "10px",
      }}
      open={isDialogOpen}
      onClose={() => dispatch(clearPopUp())}
      modal
    >
      <PopUpWrapper>
        <CloseWindowButton onClick={() => dispatch(clearPopUp())}>
          <i className="fa-solid fa-xmark"></i>
        </CloseWindowButton>
        <PopUpMessageWrapper>{message}</PopUpMessageWrapper>
        <IconWrapper>
          <i className="fa-regular fa-square-check"></i>
        </IconWrapper>
      </PopUpWrapper>
    </Popup>
  );
};

const IconWrapper = styled.div`
  width: 100%;
  margin: auto;
  text-align: center;
  font-size: 150px;
`;

const PopUpWrapper = styled.div`
  width: 400px;
  height: 40dvh;
  display: flex;
  flex-direction: column;
  margin: auto;
`;

const PopUpMessageWrapper = styled.div`
  font-size: 24px;
  text-align: center;
  margin: auto;
  border-bottom: 1px solid var(--border-primary-color);
`;

const CloseWindowButton = styled.button`
  all: unset;
  text-align: right;
  cursor: pointer;
  font-size: 20px;
`;
