import React from 'react';

import { Container, Repository } from './styles';

const CompareList = ({ repositories }) => (
  <Container>
    {repositories.map(repository => (
      <Repository>
        <header>
          <img src={repository.owner.avatar_url} alt="Facebook" />
          <strong>{repository.name}</strong>
          <small>{repository.owner.login}</small>
        </header>

        <ul>
          <li>
            {repository.stargazers_count} <small>stars</small>
          </li>
          <li>
            {repository.forks} <small>Forks</small>
          </li>
          <li>
            {repository.open_issues_count} <small>issues</small>
          </li>
          <li>
            {repository.pushed_at} <small>last commit</small>
          </li>
        </ul>
      </Repository>
    ))}
  </Container>
);

export default CompareList;
