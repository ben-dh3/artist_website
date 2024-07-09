const Marquee = ({ message }: { message: string }) => {
    return (
        <div className="font-AzeretMonoItalic marquee-colour overflow-x-hidden fixed bottom-0">
            <div className="p-2 marquee whitespace-nowrap ">
                <span className="mx-4">{message}</span>
                <span className="mx-4">{message}</span>
                <span className="mx-4">{message}</span>
                <span className="mx-4">{message}</span>
                <span className="mx-4">{message}</span>
            </div>

            <div className="absolute bottom-0 p-2 marquee2 whitespace-nowrap">
                <span className="mx-4">{message}</span>
                <span className="mx-4">{message}</span>
                <span className="mx-4">{message}</span>
                <span className="mx-4">{message}</span>
                <span className="mx-4">{message}</span>
            </div>
        </div>
    )
    
  };
  
  export default Marquee;