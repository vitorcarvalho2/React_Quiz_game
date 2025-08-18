

export default function RestartQuiz() {
  return (
    <div id="restart-quiz">
      <button
        onClick={() => {
          window.location.reload();
        }}
      >
        Restart
      </button>
    </div>
  );
}
