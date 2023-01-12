import styled from "styled-components";

export const ActionContainer = styled.div`
	width: 10.825rem;
	padding: 0.8rem;
	background: #fff;
	border-radius: 12px;
	position: absolute;
	z-index: 1;
	top: 30px;
	right: 0px;
	.btn {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.6rem 0.8rem;
		border-radius: 8px;
		cursor: pointer;
	}
	.view_display {
		background-color: whitesmoke;
	}
	.flag_display {
		background: #fff;
	}
`;

export const Status = styled.div`
	padding: 0.4rem 1rem;
	border: 1px solid #1215281a;
	display: flex;
	align-items: center;
	border-radius: 8px;
	gap: 1rem;
	text-align: center;
	max-width: 128px;

	span {
		color: #12152899;

		font-size: 14px;
		line-height: 20px;
	}
`;

export const StatusSignal = styled.div`
	width: 10px;
	height: 10px;
	border-radius: 50%;
	background-color: ${({ bg }) => bg};
`;

export const StatusBar = styled.div`
	padding: 5px 1rem;
	border-radius: 0.5rem;
	background: ${({ bg }) => bg};
	color: #fff;
	text-align: center;
`;
