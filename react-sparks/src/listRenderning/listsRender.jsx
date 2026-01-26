function ListRenderening()
{
    const skills = ['HTML5','CSS3','Bootstrap','JS','JQuery'];
    return(
        <>
            <h1>List Rendering And Keys UseCases</h1> 
            <ul>
                {
                    skills.map((item,index)=>{
                        return <li key={index}>
                            {item}
                        </li>
                    })
                }
            </ul>
        </>
    )
}

export default ListRenderening;