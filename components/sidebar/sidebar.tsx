import React, {useState} from 'react';
import {Box} from '../styles/box';
import {Sidebar} from './sidebar.styles';
import {Text} from '@nextui-org/react';
import {Flex} from '../styles/flex';
import {HomeIcon} from '../icons/sidebar/home-icon';
import {PaymentsIcon} from '../icons/sidebar/payments-icon';
import {BalanceIcon} from '../icons/sidebar/balance-icon';
import {AccountsIcon} from '../icons/sidebar/accounts-icon';
import {CollapseItems} from './collapse-items';
import {SidebarItem} from './sidebar-item';
import {SidebarMenu} from './sidebar-menu';
import {useSidebarContext} from '../layout/layout-context';
import {useRouter} from 'next/router';

export const SidebarWrapper = () => {
   const router = useRouter();
   const {collapsed, setCollapsed} = useSidebarContext();

   return (
      <Box
         as="aside"
         css={{
            height: '100vh',
            zIndex: 202,
            position: 'sticky',
            top: '0',
         }}
      >
         {collapsed ? <Sidebar.Overlay onClick={setCollapsed} /> : null}

         <Sidebar collapsed={collapsed}>
            <Sidebar.Header>
               SITE NAME
            </Sidebar.Header>
            <Flex
               direction={'column'}
               justify={'between'}
               css={{height: '100%'}}
            >
               <Sidebar.Body className="body sidebar">
                  <SidebarItem
                     title="Trang chủ"
                     icon={<HomeIcon />}
                     isActive={router.pathname === '/'}
                     href="/"
                  />
                  <SidebarMenu title="Main Menu">
                     <CollapseItems
                        icon={<PaymentsIcon />}
                        items={[
                           { name: 'Quản lý cấp phép', href: 'giay-phep/quan-ly' },
                           { name: 'KTSD Nước mặt', href: 'giay-phep/nuoc-mat' },
                           { name: 'KTSD Nước dưới đất', href: 'giay-phep/ktsd-nuoc-duoi-dat' },
                           { name: 'Thăm dò NDĐ', href: 'giay-phep/tham-do-nuoc-duoi-dat' },
                           { name: 'Hành nghề khoan', href: 'giay-phep/hanh-nghe-khoan' },
                           { name: 'Xả thải', href: 'giay-phep/xa-thai' }
                        ]}
                        title="Giấy phép"
                     />
                     <CollapseItems
                        icon={<BalanceIcon />}
                        items={[
                           { name: 'Bản đồ vị trí công trình', href: 'cong-trinh/quan-ly' },
                           { name: 'Nước mặt', href: 'cong-trinh/nuoc-mat' },
                           { name: 'Nước dưới đất', href: 'cong-trinh/nuoc-duoi-dat' },
                           { name: 'Xả thải', href: 'cong-trinh/xa-thai' }
                        ]}
                        title="Công trình"
                     />

                     <SidebarItem
                        isActive={router.pathname === '/accounts'}
                        title="Accounts"
                        icon={<AccountsIcon />}
                        href="accounts"
                     />
                  </SidebarMenu>
               </Sidebar.Body>
               <Sidebar.Footer>
                  <Text css={{textAlign: 'center', fontSize: 10, fontWeight: 'bold', borderTop: '1px solid gray'}}>
                     Thiết kế và phát triển bởi <br />
                     Viện Thủy văn Môi trường và Biến đổi khí hậu
                  </Text>
               </Sidebar.Footer>
            </Flex>
         </Sidebar>
      </Box>
   );
};
