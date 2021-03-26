import { Home, Airplay, Box, FolderPlus, Command, Cloud, FileText, Server, BarChart, Users, Layers, ShoppingBag, List, Mail, MessageCircle, GitPullRequest, Monitor, Heart, Clock, Zap, CheckSquare, Calendar, Image, Film, HelpCircle, Radio, Map, Edit, Sunrise, Package } from 'react-feather'
export const MENUITEMS = [
    {
        menutitle:"General",
        menucontent:"Prediction, Simulation",
        Items:[
            {
                title: 'Dashboard', icon: Home, type: 'sub', active: false, children: [
                    { path: `${process.env.PUBLIC_URL}/dashboard/default`, title: 'Eolic', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/dashboard/ecommerce`, title: 'Solar', type: 'link' },
                ]
            },
            {
                title: 'Simulation', icon: Airplay, type: 'sub', active: false, children: [
                    { path: `${process.env.PUBLIC_URL}/widgets/general`, title: 'Eolic', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/widgets/chart`, title: 'Solar', type: 'link' },
                ]
            },
        ]
    },

    
    {
        menutitle:"Idea",
        menucontent:"Proyect",
        Items:[
            
    
            { path: `${process.env.PUBLIC_URL}/app/knowledgebase`,icon: Sunrise,  type: 'link',active:false,title: 'Proyect' },
    ]   
    }
    
    
    

]