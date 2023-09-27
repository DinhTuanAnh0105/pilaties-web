import React, { Fragment, lazy } from 'react';
import BaseUrl from 'consts/baseUrl';
import withCheckRole from 'HOCs/withCheckRole';
import { PERMISSION_ENUM } from 'consts/index';

// Bash importHere
const DefaultLayout = lazy(() => import('layouts/DefaultLayout'));
const Login = lazy(() => import('pages/Login'));
const Homepage = lazy(() => import('pages/Homepage'));

const PageStaffManagement = lazy(() => import('pages/GeneralManagement/StaffManagement'));
const PageFacilityManagement = lazy(() => import('pages/GeneralManagement/FacilityManagement'));
const CreateTrungTam = lazy(
  () => import('pages/GeneralManagement/FacilityManagement/CreateTrungTam')
);
const DetailTrungTam = lazy(
  () => import('pages/GeneralManagement/FacilityManagement/DetailTrungTam')
);
const AccountInfo = lazy(() => import('pages/AccountInfo'));

interface Route {
  name: string;
  path: string;
  isPrivateRoute?: boolean;
  layout:
    | React.LazyExoticComponent<React.MemoExoticComponent<any>>
    | React.ExoticComponent<any>
    | typeof React.Component;
  routeChild: {
    name: string;
    path: string;
    component: typeof React.Component | React.FC;
    isPrivateRoute?: boolean;
  }[];
}

const routes: Route[] = [
  {
    name: 'Login Layout',
    path: BaseUrl.Login,
    layout: Fragment,
    routeChild: [
      {
        name: 'Login',
        path: BaseUrl.Login,
        component: Login,
      },
    ],
  },

  {
    name: 'Home Layout',
    path: BaseUrl.Homepage,
    layout: DefaultLayout,
    isPrivateRoute: true,
    routeChild: [
      // Bash appendHere
      {
        name: 'Homepage',
        path: BaseUrl.Homepage,
        component: withCheckRole(Homepage, [PERMISSION_ENUM.PUBLIC]),
      },
    ],
  },
  {
    name: 'General Management',
    path: BaseUrl.GeneralManagement,
    layout: DefaultLayout,
    isPrivateRoute: true,
    routeChild: [
      {
        name: 'Staff Management',
        path: BaseUrl.StaffManagement,
        component: withCheckRole(PageStaffManagement, [PERMISSION_ENUM.PUBLIC]),
      },
      {
        name: 'Facility Management',
        path: BaseUrl.FacilityManagement,
        component: withCheckRole(PageFacilityManagement, [PERMISSION_ENUM.PUBLIC]),
      },
      {
        name: 'Create Facility Management',
        path: BaseUrl.CreateFacilityManagement,
        component: withCheckRole(CreateTrungTam, [PERMISSION_ENUM.PUBLIC]),
      },
      {
        name: 'Detail Facility Management',
        path: BaseUrl.DetailFacilityManagement,
        component: withCheckRole(DetailTrungTam, [PERMISSION_ENUM.PUBLIC]),
      },
    ],
  },
  {
    name: 'Account Information',
    path: '',
    layout: DefaultLayout,
    isPrivateRoute: true,
    routeChild: [
      {
        name: 'Account Information',
        path: BaseUrl.AccountInformation,
        component: withCheckRole(AccountInfo, [PERMISSION_ENUM.PUBLIC]),
      },
    ],
  },
];

export default routes;
