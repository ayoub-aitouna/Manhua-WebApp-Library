import React from "react";
type SeriesListProps = {
  title: string;
  children: React.ReactNode;
};
const SeriesList = ({ title, children }: SeriesListProps) => {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl text-white font-semibold">
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 24 24"
          className="h-7 w-7 ml-2 inline-block align-middle"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zM8.5 15H7.3l-2.55-3.5V15H3.5V9h1.25l2.5 3.5V9H8.5v6zm5-4.74H11v1.12h2.5v1.26H11v1.11h2.5V15h-4V9h4v1.26zm7 3.74c0 .55-.45 1-1 1h-4c-.55 0-1-.45-1-1V9h1.25v4.51h1.13V9.99h1.25v3.51h1.12V9h1.25v5z"></path>
        </svg>
        {title}
      </h1>
      <div className="flex fex-row flex-wrap gap-6">{children}</div>
    </div>
  );
};

export default SeriesList;