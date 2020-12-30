import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
  .repo-lang-color {
    height: 15px;
    width: 15px;
    border-radius: 50%;
  }
`;

const GhCard = (props) => {
    return(
    <Styles>
      <div className="border border-gray rounded p-3">
        <h6 className="pb-1">
          <a href={ props.repourl }>
            <svg height="20" class="octicon octicon-repo octicon octicon-repo mr-1 v-align-middle" fill="#586069" aria-label="repo" viewBox="0 0 12 16" version="1.1" width="15" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>
            { props.reponame }
          </a>
        </h6>
        <div class="text-muted pb-2 ws-normal">
          { props.repodesc }
        </div>
        <div className="d-flex f6">
          <span className="repo-lang-color mt-1 mr-2" style={{ backgroundColor: props.repolangcolor }}></span>
          <span className="text-muted mr-3" >{ props.repolang }</span>
        </div>
      </div>
    </Styles>
    );
}

export default GhCard;