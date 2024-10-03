import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
export default function InfoBox({info}){
    let Hot_URL =
    "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let Cold_URl =
    "https://images.unsplash.com/photo-1641672222794-536ad524a929?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let Rain_URL = 
    "https://plus.unsplash.com/premium_photo-1666726664307-707a74015ca4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
      
   
   
    return(
        <div className="InfoBox">
              <div  className='Cardcontent'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80 ?Rain_URL : info.temp >15 ? Hot_URL :Cold_URl}
        title="green iguana"
      />
      <CardContent>
      <Typography gutterBottom variant="h5" component="div">
      {info.City} {info.humidity>80 ?<ThunderstormIcon/> :info.temp>15?<WbSunnyIcon/>:<AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
        <p>temperacuture {info.temp}&deg;C</p>
        <p>humidity {info.humidity}</p>
        <p>MaxTemperucture {info.tempmax}&deg;C</p>
        <p>MinTemperacuture {info.tempmin}&deg;C</p>
        <p> Weather can describe {info.weather}  feelslike {info.feels}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    )
}