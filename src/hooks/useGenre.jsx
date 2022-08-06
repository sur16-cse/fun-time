const useGenres=(selectedGenres)=>{
    if(selectedGenres.length<1) return "";
    const GenreIds=selectedGenres.map((genre)=>genre.id)
    //1 2 3 4
    return GenreIds.reduce((acc,curr)=>
        acc+','+curr //1,2,3,4...
    )
}

export default useGenres