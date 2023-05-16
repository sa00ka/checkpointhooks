import {useParams,useNavigate} from 'react-router-dom'
import {Button ,Figure } from 'react-bootstrap'

const OneFilm = ({elmovi}) => {
    const elid=useParams()
    const pagenav =useNavigate()
    const filmfiltred= elmovi.filter((item)=>item.id == elid.id)[0];
    console.log(filmfiltred)
   
  return (
    <div className='elonefilm'>
        <Button onClick={()=>pagenav('/')} style={{marginTop:"40px"}} variant="success">Back</Button>
        <Figure className='elfigure' >
        <Figure.Image
          width="50%"
          height="50%"
          alt="171x180"
          src={filmfiltred.posterurl}
        />
        <Figure.Caption className='captionelfigure'>
            <h1 className='elname'>Name: {filmfiltred.name}</h1>
            <p className='eddiscription'>Description: {filmfiltred.description}</p>
            
        </Figure.Caption>
        
          </Figure>
          <iframe className='eltrailer' width="560" height="315" src={filmfiltred.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>        
        

  )
}

export default OneFilm
