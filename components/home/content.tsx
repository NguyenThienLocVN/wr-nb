import { Grid, Card, Text } from "@nextui-org/react";
import ConstructionStatus from "./card-cons-status";
import {Flex} from '../styles/flex';
import ChartLicense from "./chart-license";
import CountLicenseFee from "./card-license-fee";

export const Content = () => {
  
  return (
    <Grid.Container gap={2} justify="center">
      <Grid xs={4} css={{display: 'block !important'}}>
         <Card css={{mb: 15}}>
            <Card.Body>
               <ConstructionStatus />
            </Card.Body>
         </Card>
         <Card css={{mb: 15}}>
            <Card.Body css={{overflow: 'hidden !important'}}>
               <Flex
               >
                  <Grid xs={5} css={{display: 'block !important'}}>
                     <Text h6 css={{whiteSpace: 'nowrap'}} >Tổng số giấy phép đã cấp</Text>
                     <Text h3 css={{
                        'textAlign': 'center',
                        whiteSpace: 'nowrap',
                        '@sm': {
                           textAlign: 'center',
                        },
                     }} >307</Text>
                     <Text h6 css={{whiteSpace: 'nowrap'}} >BTNMT: 100</Text>
                     <Text h6 css={{whiteSpace: 'nowrap'}} >UBND Tỉnh: 207</Text>
                  </Grid>
                  <Grid xs={7} css={{display: 'block !important'}}>
                     <ChartLicense chartId="chartAllLicense" />
                  </Grid>
               </Flex>
            </Card.Body>
         </Card>
         <Card>
            <Card.Body css={{overflow: 'hidden !important'}}>
               <CountLicenseFee />
            </Card.Body>
         </Card>
      </Grid>
      <Grid xs={8}>
         <Card>
            <Card.Body>
               MAP
            </Card.Body>
         </Card>
      </Grid>
    </Grid.Container>
  );
}
