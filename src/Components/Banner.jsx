
const Banner = ({title, paragraph, colors}) => {
  return (
    <div className={`p-10 text-center text-white font-bold text-3l hover:shadow-green-500/75 transition-shadow duration-200 bg-${colors}`} >
        <h3 className="p-2">{title}</h3>
        <p className="text-green-600">{paragraph}</p>
    </div>
  )
  }

export default Banner