import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed&family=Bellefair&display=swap');

    *,
    *::before,
    *::after{
        padding:0;
        margin:0;
        box-sizing:border-box;
    }

    :root{
        --primary:rgba(11,13,23,1); /*#0B0D17*/
        --secondary:rgba(208,214,249,1);
        --white:rgba(255,255,255,1);

        --primary-font:"Barlow Condensed";
        --secondary-font:"Bellafair";

        /* font-sizes */
        --small-font:0.625rem;
        --semi-small-font:0.75rem;
        --medium-font:0.9375;
        --average-font:1rem;
        --semi-medium-font:1.25rem;
        --semi-big-font:1.5rem;
        --big-font:2rem;
        --very-large-font:5rem;

        /* gap */
        --small-gap:.5rem;
        --medium-gap:1rem;
        --big-gap:2rem;

        --transition:.35s ease-in-out;
    }

    body{
        font-family:var(--primary-font),sans-serif;
        background-color: black;
        color: white;
    }

    h1,h2,h3,h4,h5{
        font-family:var(--secondary),serif;
    }

    h1{
        font-size: var(--very-large-font);
        @media screen and (min-width: 641px) {
            font-size: 9.375rem;
		}
    }

    h2{
        font-size: 6.25rem;
    }

    h3{
        font-size: 3.5rem;
    }

    h4{
        font-size: 2rem;
    }

    h5{
        font-size:1.75rem;
    }

    img{
        max-width: 100%;
    }

    button{
        color:inherit;
        font-family: inherit;
    }

    a{
        text-decoration:none;
        color: inherit;
    }
`;

export const Paragraph = styled.p`
	font-size: 1rem;
`;

export const SubHeading1 = styled.p`
	font-size: 1.75rem;
`;

export const SubHeading2 = styled.p`
	font-size: 0.875rem;
`;

export const SectionWrapper = styled.section`
	min-height: 100vh;
	background-image: url(${(props) => props.img[2]});
	background-repeat: no-repeat;
	background-size: cover;
	padding-block: 8rem 2rem;

	@media screen and (min-width: 641px) {
		background-image: url(${(props) => props.img[1]});
	}

	@media screen and (min-width: 1280px) {
		background-image: url(${(props) => props.img[0]});
	}
`;

export const SectionContainer = styled.div``;

export const Img = styled.img``;

export const SectionHeaderText = styled.p`
	letter-spacing: 3.375px;
	text-transform: uppercase;
	text-align: center;

	@media screen and (min-width: 641px) {
		text-align: left;
		padding-inline-start: 2rem;
	}

	span {
		mix-blend-mode: normal;
		opacity: 0.25;
	}
`;

export default GlobalStyle;
