export default function UsersPlusIcon({ className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M5 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
      <path d="M3 21v-2a4 4 0 0 1 4 -4h4c.96 0 1.84 .338 2.53 .901"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      <path d="M16 19h6"></path>
      <path d="M19 16v6"></path>
    </svg>
  );
}