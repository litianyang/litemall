const tab_user = () => import('@/views/user/tabbar-user');
const UserCollect = () => import('@/views/user/module-collect');
const UserInvitation = () => import('@/views/user/module-invitation');
const UserAddress = () => import('@/views/user/module-address');
const UserAddressEdit = () => import('@/views/user/module-address-edit');
const UserServer = () => import('@/views/user/module-server');

const UserInformation = () => import('@/views/user/user-information-set');
const UserInfo_SetBg = () => import('@/views/user/user-information-set/set-bg');
const UserInfo_SetMobile = () => import('@/views/user/user-information-set/set-mobile');
const UserInfo_SetNickname = () => import('@/views/user/user-information-set/set-nickname');
const UserInfo_SetPassword = () => import('@/views/user/user-information-set/set-password');

const UserOrderEntityList = () => import('@/views/user/order-entity-list');
const UserOrderEleList = () => import('@/views/user/order-ele-list');
const UserRefundList = () => import('@/views/user/refund-list');

const Tabbar = () => import('@/components/Tabbar/');

export default [
  {
    path: '/user',
    name: 'user',
    meta: {
      keepAlive: true
    },
    components: { default: tab_user, tabbar: Tabbar }
  },
  {
    path: '/user/collect',
    name: 'collect',
    meta: {
      login: true
    },
    component: UserCollect
  },
  {
    path: '/user/invitation',
    name: 'invitation',
    meta: {
      login: true
    },
    component: UserInvitation
  },
  {
    path: '/user/address',
    name: 'address',
    meta: {
      login: true
    },
    component: UserAddress
  },
  {
    path: '/user/address/edit/:addressId',
    name: 'address-edit',
    props: true,
    meta: {
      login: true
    },
    component: UserAddressEdit
  },
  {
    path: '/user/server',
    name: 'user-server',
    component: UserServer
  },
  {
    path: '/user/information',
    name: 'user-information',
    meta: {
      login: true
    },
    component: UserInformation
  },
  {
    path: '/user/information/setbg',
    name: 'user-info-setbg',
    component: UserInfo_SetBg
  },
  {
    path: '/user/information/setMobile',
    name: 'user-info-setMobile',
    component: UserInfo_SetMobile
  },
  {
    path: '/user/information/setNickname',
    name: 'user-info-setNickname',
    component: UserInfo_SetNickname
  },
  {
    path: '/user/information/setPassword',
    name: 'user-info-setPassword',
    component: UserInfo_SetPassword
  },
  {
    path: '/user/order/list/:active',
    name: 'user-order-list',
    props: true,
    component: UserOrderEntityList
  },
  {
    path: '/user/orderEle/list/:active',
    name: 'user-order-ele-list',
    props: true,
    component: UserOrderEleList
  },
  {
    path: '/user/refund/list',
    name: 'user-refund-list',
    component: UserRefundList
  }
];
