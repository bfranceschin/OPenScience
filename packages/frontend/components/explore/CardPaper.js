const ImageIPFS = (imgUrl) => {
  return (
    <div></div>
  )
}

const CardPaper = (props) => {
  return ( 
    <div className="card w-96 bg-base-100 shadow-xl mb-5">
      <div className="h-64 bg-base-300 place-content-center">
        {props.cover !== "" 
          ? <ImageIPFS imgUrl={props.cover}/>
          : <figure className="h-full overflow-hidden">
              <img width="384px" height="100px" src={imageTempURL} />
            </figure>
        }
        
      </div>
      <div className="card-body">
        <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
          <a
            href="/"
            className="transition-colors duration-200 text-gray-900 hover:text-purple-700"
            aria-label="Category"
            title="traveling"
          >
            {props.author}
          </a>
          <span className="text-gray-600"> {props.date} </span>
        </p>
        <a
          href="/"
          aria-label="Category"
          title="Visit the East"
          className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-purple-700"
        >
          {props.title}
        </a>
        <p className="mb-2 text-gray-700">
          {props.keywords}
        </p>
      </div>
    </div>
  )
}

export default CardPaper;