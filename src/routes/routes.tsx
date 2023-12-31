import BaseUrl from 'consts/baseUrl';
import { PERMISSION_ENUM } from 'consts/index';
import withCheckRole from 'HOCs/withCheckRole';
import React, { Fragment, lazy } from 'react';

// Bash importHere
const DefaultLayout = lazy(() => import('layouts/DefaultLayout'));
const Login = lazy(() => import('pages/Login'));
const Homepage = lazy(() => import('pages/Homepage'));
const Dashboard = lazy(() => import('pages/Dashboard/index'));

const PageStaffManagement = lazy(() => import('pages/GeneralManagement/StaffManagement'));
const PageFacilityManagement = lazy(() => import('pages/GeneralManagement/FacilityManagement'));
const CreateTrungTam = lazy(
  () => import('pages/GeneralManagement/FacilityManagement/CreateTrungTam')
);
const UpdateTrungTam = lazy(
  () => import('pages/GeneralManagement/FacilityManagement/UpdateTrungTam')
);
const DetailTrungTam = lazy(
  () => import('pages/GeneralManagement/FacilityManagement/DetailTrungTam')
);
const DetailFacility = lazy(
  () => import('pages/GeneralManagement/FacilityManagement/DetailFacility')
);
const TypeExercise = lazy(() => import('pages/GeneralManagement/TypeExercise/index'));
const DetailTypeExercise = lazy(() => import('pages/GeneralManagement/TypeExercise/detail'));
const SystemNotifications = lazy(() => import('pages/GeneralManagement/SystemNotifications/index'));

const AccountInfo = lazy(() => import('pages/Member'));

const ListMember = lazy(() => import('pages/Member/ListMember/index'));
const InfoMember = lazy(() => import('pages/Member/InfoMember/index'));

const TeachingSchedule = lazy(() => import('pages/Classes/TeachingSchedule/index'));
const Booking = lazy(() => import('pages/Classes/Booking'));
const ClassSchedule = lazy(() => import('pages/Classes/ClassSchedule/index'));
const PagePackageExerciseManagement = lazy(() => import('pages/GeneralManagement/PackageExercise'));
const Contract = lazy(() => import('pages/Contract'));
const ComparePlace = lazy(() => import('pages/ComparePlace'));

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
    name: 'Dashboard',
    path: BaseUrl.Dashboard,
    layout: DefaultLayout,
    isPrivateRoute: true,
    routeChild: [
      {
        name: 'Dashboard',
        path: BaseUrl.Dashboard,
        component: withCheckRole(Dashboard, [PERMISSION_ENUM.PUBLIC]),
      },
      {
        name: 'Compare Place',
        path: BaseUrl.ComparePlace,
        component: withCheckRole(ComparePlace, [PERMISSION_ENUM.PUBLIC]),
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
        name: 'Update Facility Management',
        path: BaseUrl.UpdateFacilityManagement,
        component: withCheckRole(UpdateTrungTam, [PERMISSION_ENUM.PUBLIC]),
      },
      {
        name: 'Detail Facility Management',
        path: BaseUrl.DetailFacilityManagement,
        component: withCheckRole(DetailTrungTam, [PERMISSION_ENUM.PUBLIC]),
      },
      {
        name: 'Detail Facility',
        path: BaseUrl.DetailFacility,
        component: withCheckRole(DetailFacility, [PERMISSION_ENUM.PUBLIC]),
      },
      {
        name: 'Type of exercise',
        path: BaseUrl.TypeExercise,
        component: withCheckRole(TypeExercise, [PERMISSION_ENUM.PUBLIC]),
      },
      {
        name: 'Detail type of exercise',
        path: BaseUrl.DeatilTypeExercise,
        component: withCheckRole(DetailTypeExercise, [PERMISSION_ENUM.PUBLIC]),
      },
      {
        name: 'Package exercise',
        path: BaseUrl.PackageExercise,
        component: withCheckRole(PagePackageExerciseManagement, [PERMISSION_ENUM.PUBLIC]),
      },
      {
        name: 'System Notifications',
        path: BaseUrl.SystemNotifications,
        component: withCheckRole(SystemNotifications, [PERMISSION_ENUM.PUBLIC]),
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
      {
        name: 'List Member',
        path: BaseUrl.ListMember,
        component: withCheckRole(ListMember, [PERMISSION_ENUM.PUBLIC]),
      },
      {
        name: 'Info Member',
        path: BaseUrl.InfoMember,
        component: withCheckRole(InfoMember, [PERMISSION_ENUM.PUBLIC]),
      },
    ],
  },
  {
    name: 'Classes',
    path: BaseUrl.Classes,
    layout: DefaultLayout,
    isPrivateRoute: true,
    routeChild: [
      {
        name: 'Teaching Schedule',
        path: BaseUrl.TeachingSchedule,
        component: withCheckRole(TeachingSchedule, [PERMISSION_ENUM.PUBLIC]),
      },
      {
        name: 'Booking',
        path: BaseUrl.Booking,
        component: withCheckRole(Booking, [PERMISSION_ENUM.PUBLIC]),
      },
      {
        name: 'Class Schedule',
        path: BaseUrl.ClassSchedule,
        component: withCheckRole(ClassSchedule, [PERMISSION_ENUM.PUBLIC]),
      },
    ],
  },
  {
    name: 'Contract',
    path: BaseUrl.Contract,
    layout: DefaultLayout,
    isPrivateRoute: true,
    routeChild: [
      {
        name: 'Contract',
        path: BaseUrl.Contract,
        component: withCheckRole(Contract, [PERMISSION_ENUM.PUBLIC]),
      },
    ],
  },
];

export default routes;
