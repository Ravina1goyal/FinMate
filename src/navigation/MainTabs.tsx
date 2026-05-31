import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import DashboardScreen from '../screens/Dashboard/DashboardScreen';
import TransactionsScreen from '../screens/Transactions/TransactionsScreen';
import AnalyticsScreen from '../screens/Analytics/AnalyticsScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import BillsScreen from '../screens/Bills/BillsScreen';

const Tab = createBottomTabNavigator()
const MainTabs = () => {
    return(
       <Tab.Navigator>
            <Tab.Screen name="DashboardScreen" component={DashboardScreen} />
            <Tab.Screen name="Transactions" component={TransactionsScreen} />
            <Tab.Screen name="Bills" component={BillsScreen} />
            <Tab.Screen name="Analytics" component={AnalyticsScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
       </Tab.Navigator> 
    );
}
export default MainTabs