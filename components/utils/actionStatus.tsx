import React, { useEffect} from "react"

interface statusDetail{
  text: string;
  type: string;
};

interface actionComp{
  detail: statusDetail;
  handler: () => void
};

const ActionStatus: React.FC<actionComp> = ({detail, handler}) => {
  useEffect(()=>{
    const timer = setTimeout(()=>{
       handler()
      console.log('a')
    },5000);

    // window.onclick = handler;
    return ()=> clearTimeout(timer);
  },[]);

  return(
      <div style={{zIndex:102}} className={
         detail.type === 'positive' ? 
        'rounded-xl bg-[white] text-secondaryColor sticky text-center text-xl font-bold border m-2 p-2 top-2':
        'rounded-xl bg-[white] text-dangerColor sticky text-center text-xl font-bold border m-2 p-2 top-2'}>
          <div>
            <em>{detail.text}</em>
          </div>
          <button className="p-2 m-2 rounded-xl border" onClick={handler} type='button'>
            ok
          </button>
      </div>
    )
}

export default ActionStatus;