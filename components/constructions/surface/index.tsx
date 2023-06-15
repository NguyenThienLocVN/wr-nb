import {Button, Input, Text, Grid, Card} from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';
import dynamic from 'next/dynamic';
import {Table} from '@nextui-org/react';


const MapWithNoSSR = dynamic(() => import('../../map'), {
    ssr: false,
});

const showRiver = (lat:any, lng:any) => {
    // const map = useMap();
    // map.setView(lat, lng);
    console.log(MapWithNoSSR);
}

export const Surface = () => {
  const center = [64.536634, 16.779852];
   return (
    <Grid.Container gap={2} justify="center">
      <Grid xs={12} css={{display: 'block !important'}}>
         <Card>
            <Card.Body css={{height: '50vh'}}>
                <MapWithNoSSR />
            </Card.Body>
         </Card>
      </Grid>
      <Grid xs={12} css={{p: 0}}>
         <Card>
            <Card.Body>
                <Table
                aria-label="Example table with custom cells"
                css={{
                height: 'auto',
                minWidth: '100%',
                boxShadow: 'none',
                width: '100%',
                px: 0,
                }}
            >
                <Table.Header>
                    <Table.Column align='start'>STT</Table.Column>
                    <Table.Column align='start'>Tên sông</Table.Column>
                    <Table.Column align='start'>Địa điểm</Table.Column>
                    <Table.Column align='start'>Độ dài</Table.Column>
                    <Table.Column align='center'>Nguồn</Table.Column>
                    <Table.Column align='center'>Cửa sông</Table.Column>
                </Table.Header>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>1</Table.Cell>
                        <Table.Cell><Button onPress={() => showRiver(64.536634, 16.779852)} css={{color: 'white', cursor: 'pointer'}}>Sông Trà Bồng</Button></Table.Cell>
                        <Table.Cell>Quảng Ngãi</Table.Cell>
                        <Table.Cell>&nbsp;</Table.Cell>
                        <Table.Cell>&nbsp;</Table.Cell>
                        <Table.Cell>&nbsp;</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>2</Table.Cell>
                        <Table.Cell><Button onPress={() => showRiver(64.536634, 16.779852)} css={{color: 'white', cursor: 'pointer'}}>Sông Hà Doi</Button></Table.Cell>
                        <Table.Cell>Quảng Ngãi</Table.Cell>
                        <Table.Cell>&nbsp;</Table.Cell>
                        <Table.Cell>&nbsp;</Table.Cell>
                        <Table.Cell>&nbsp;</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>3</Table.Cell>
                        <Table.Cell><Button onPress={() => showRiver(64.536634, 16.779852)} css={{color: 'white', cursor: 'pointer'}}>Sông Bin Dần</Button></Table.Cell>
                        <Table.Cell>Quảng Ngãi</Table.Cell>
                        <Table.Cell>&nbsp;</Table.Cell>
                        <Table.Cell>&nbsp;</Table.Cell>
                        <Table.Cell>&nbsp;</Table.Cell>
                    </Table.Row>
                </Table.Body>
                <Table.Pagination
                shadow
                noMargin
                align="center"
                rowsPerPage={8}
                onPageChange={(page) => console.log({page})}
                />
            </Table>
            </Card.Body>
         </Card>
      </Grid>
    </Grid.Container>
   );
};
