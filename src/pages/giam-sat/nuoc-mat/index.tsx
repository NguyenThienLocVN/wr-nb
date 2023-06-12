import { Height } from '@mui/icons-material';
import { Grid, Box, Typography } from '@mui/material';
import { useEffect } from 'react';
import { TileLayer } from 'react-leaflet';
import Map from 'src/@core/components/map';

const DEFAULT_CENTER = [38.907132, -77.036546]


const SurfaceWater = () => {
    useEffect(() => {
        document.title = "Quản lý thông tin công trình nước mặt";
    }, []);

    // const [data, setData] = useState([]);

    // useEffect(() => {
    //   fetchData();
    // }, []);

    // const fetchData = async () => {
    //   try {
    //     const response = await fetch('http://tnnsl.loc/api/Construction/list?BasinId=0&CommuneId=0&DistrictId=0&Keyword=&LicenseId=-1&LicensingAuthorities=-1&PageIndex=1&PageSize=0&ProvinceId=0&StartDate=-1&Status=true&TypeOfConstructionId=1'); // Thay đổi URL API tùy thuộc vào nguồn dữ liệu của bạn
    //     const jsonData = await response.json();
    //     console.log(jsonData.ListData)
    //     setData(jsonData.ListData);
    //   } catch (error) {
    //     console.error('Error fetching data:', error);
    //   }
    // }; 

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={12} sx={{overflow: 'hidden' }}>
                <Map className={'w-100'} style={{ width: '100%', height: '55vh' }} center={DEFAULT_CENTER} zoom={12}>
                    {({ TileLayer, Marker, Popup }: any) => (
                        <>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                            />
                            <Marker position={DEFAULT_CENTER}>
                                <Popup>
                                    A pretty CSS3 popup. <br /> Easily customizable.
                                </Popup>
                            </Marker>
                        </>
                    )}
                </Map>
            </Grid>
            <Grid item xs={12} sm={12} md={12} className='_row _justifyContentBetween' >
                <Box>
                    <Typography className='_font12'>
                        Tổng số công trình KTSDN  mặt: 132
                    </Typography>
                    <Typography className='_font12'>
                        Số công trình đã cấp phép: 132
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                {/* <TableList data={data} /> */}
            </Grid>
        </Grid>
    );
}

export default SurfaceWater