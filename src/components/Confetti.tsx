import Confetti from 'react-confetti'

function confetti () {
    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
          width,
          height
        };
      }    return (
    <Confetti
      width={getWindowDimensions().width}
      height={getWindowDimensions().height}
    />
  )
}
export default confetti