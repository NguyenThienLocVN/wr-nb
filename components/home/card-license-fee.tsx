import { Grid, Text } from "@nextui-org/react";
import { Flex } from "../styles/flex";
import CurrencyFormatter from "../Formater/format-amount";

export default function CountLicenseFee() {
    const data = [
        {name:'BTNMT', money:100000000},
        {name:'UBND', money:200000000}
    ];
  return (
    <Grid.Container xs={12} sm={12}>
        <Grid xs={12} css={{display: 'block !important', 'textAlign': 'center',}}>
            <Text h6 css={{whiteSpace: 'nowrap'}} >Tổng số tiền cấp quyền (VNĐ) </Text>
            <Text h3 ><CurrencyFormatter amount= {data[0].money + data[1].money} /></Text>
            <Grid xs={12}>
                <Flex
                css={{
                'px': '$12',
                'mt': '$8',
                '@xsMax': {px: '$10'},
                'gap': '$12',
                'justifyContent': 'center'
                }}
            >
                    <Text h6 css={{whiteSpace: 'nowrap'}} >{data[0].name}: <CurrencyFormatter amount= {data[0].money} /></Text>
                    <Text h6 css={{whiteSpace: 'nowrap'}} >{data[1].name}:  <CurrencyFormatter amount= {data[1].money} /></Text>
                </Flex>
            </Grid>
        </Grid>
    </Grid.Container>
  );
}
