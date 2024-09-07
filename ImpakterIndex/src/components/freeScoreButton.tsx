export default function FreeScoreButton({ className }: { className: string }) {
  // separate component as need to be reused, and event functions need to be added later on
  return <button className={className}>Free ESG Rating</button>;
}
