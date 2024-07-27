

function Form ({close}){



    return <div className="h-screen bg-white bg-opacity-55 absolute w-full top-0
    ">

     <div className="flex justify-center pt-24">

        <form className="bg-blue-500 w-[400px] mt-10 h-[400px]  p-5 ">
        <i onClick={close} class="fa-solid fa-x text-3xl "></i>
            <input className=" border-2 border-black w-[350px] my-3 rounded-md h-[50px] p-3" type="" placeholder="Enter titele"/>
            <br/>
            <textarea className="rounded-md border-2 border-black"  rows={2} cols={46}/>
            <button className="w-[200px] rounded-md border-2 border-black ml-[20%] mt-5  h-[50px] bg-white">Save</button>
        </form>

    </div>
    </div>
}

export default Form