import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="" />
        <article>
          <div className="title">
            <h2>Our Story</h2>
            <div className="underline"></div>
          </div>

          <p>
            With the aid of our sturdy production facilities and skilled
            workforce, we are successfully catering to the needs of different
            sectors. We are one of the renowned manufacturers and suppliers
            offering exclusive assortment of furniture that has high aesthetic
            appeal and glossy appearance. We cater to the needs of houses,
            hotels, restaurants, office, and other sectors. We take extensive
            care while designing our range and keep client specific requirements
            in mind as well. This further enables us in achieving superior
            customer satisfaction.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    font-size: 1.1rem;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
