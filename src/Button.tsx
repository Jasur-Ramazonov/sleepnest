import { useDispatch } from "react-redux";
import { setIsOpen } from "./utils/slice";
import styled from "styled-components";

const Button = () => {
  const dispatch = useDispatch();
  return (
    <StyledWrapper>
      <div className="hamburger absolute z-[9999]">
        <input
          className="checkbox"
          type="checkbox"
          onChange={(e) => {
            dispatch(setIsOpen(e.target.checked));
          }}
        />
        <svg fill="none" viewBox="0 0 50 50" height={30} width={30}>
          <path
            className="lineTop line"
            strokeLinecap="round"
            strokeWidth={4}
            stroke="black"
            d="M6 11L44 11"
          />
          <path
            strokeLinecap="round"
            strokeWidth={4}
            stroke="black"
            d="M6 24H43"
            className="lineMid line"
          />
          <path
            strokeLinecap="round"
            strokeWidth={4}
            stroke="black"
            d="M6 37H43"
            className="lineBottom line"
          />
        </svg>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .hamburger {
    height: 30px;
    width: 30px;
    transform: 0.2s;
    position: relative;
  }
  .hamburger .checkbox {
    position: absolute;
    opacity: 0;
    height: 100%;
    width: 100%;
    cursor: pointer;
  }
  .line {
    transition: 0.5s;
    stroke-width: 2px;
    stroke: black;
  }
  .lineTop {
    stroke-dasharray: 40 40;
    stroke-dashoffset: 25;
  }
  .lineBottom {
    stroke-dasharray: 40 40;
    stroke-dashoffset: 60;
  }
  .lineMid {
    stroke-dasharray: 40 40;
  }
  .hamburger .checkbox:checked + svg .line {
    stroke: crimson;
  }
  .hamburger .checkbox:checked + svg .lineTop {
    stroke-dashoffset: 0;
    transform-origin: left;
    transform: rotateZ(45deg) translate(-7px, -5px);
  }
  .hamburger .checkbox:checked + svg .lineMid {
    stroke-dashoffset: 40;
  }
  .hamburger .checkbox:checked + svg .lineBottom {
    stroke-dashoffset: 0;
    transform-origin: left;
    transform: rotateZ(-45deg) translate(-5px, 5px);
  }
`;

export default Button;
