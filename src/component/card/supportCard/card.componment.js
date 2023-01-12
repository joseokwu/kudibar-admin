import styled from "styled-components";
import rightArrow from "../../../assets/svg/rightArrow.svg";
export const SupportCard = ({
	bgColor,
	value,
	title,
	bt,
	rg,
	tp,
	onClick = () => {},
}) => {
	return (
		<Card onClick={onClick}>
			<CardBg tp={tp} rg={rg} bt={bt}>
				<img src={bgColor} alt="" />
			</CardBg>
			<div className="font-[600] text-[28px] py-2 px-3">{value}</div>
			<div className="flex items-center gap-[0.3rem] px-3 text-[#A6A7AE]">
				<p>{title}</p>
				<img src={rightArrow} alt="" />
			</div>
		</Card>
	);
};

export const CardImg = styled.div`
	width: 60px;
	height: 60px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: ${({ bg }) => bg};
	border-radius: 50%;
`;

export const CardBg = styled.div`
	position: absolute;
	top: ${({ tp }) => (tp ? "-15px" : "")};
	right: ${({ rg }) => (rg ? "-10px" : "")};
	bottom: ${({ bt }) => (bt ? "0px" : "")};
`;
const Card = styled.div`
	width: 15rem;
	background: white;
	padding: 1rem;
	position: relative;
	border-radius: 7px;
	overflow: hidden;
	margin: 0.5rem 1rem;
`;
