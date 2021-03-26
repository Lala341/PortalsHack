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
    },

    {
        menutitle:"Components",
        menucontent:"UI Components & Elements",
        Items:[
            {
                title: 'Ui-Kits', icon: Box, type: 'sub',  active: false, children: [
                    { path: `${process.env.PUBLIC_URL}/ui-kits/statecolor`, title: 'State-color', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/ui-kits/typography`, title: 'Typography', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/ui-kits/avatar`, title: 'Avatars', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/ui-kits/helperclass`, title: 'Helper-Classes  ', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/ui-kits/grid`, title: 'Grid', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/ui-kits/tagsandpills`, title: 'Tag & Pills', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/ui-kits/progress-bar`, title: 'Progress', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/ui-kits/modal`, title: 'Modal', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/ui-kits/alert`, title: 'Alert', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/ui-kits/popover`, title: 'Popover', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/ui-kits/tooltips`, title: 'Tooltip', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/ui-kits/spinner`, title: 'Spinners', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/ui-kits/dropdown`, title: 'Dropdown ', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/ui-kits/accordion`, title: 'Accordion', type: 'link' },
            {
                title: 'Tabs', type: 'sub', children: [
                    { title: 'Bootstrap Tabs', type: 'link', path: `${process.env.PUBLIC_URL}/ui-kits/tab-bootstrap` },
                    { title: 'Line Tabs', type: 'link', path: `${process.env.PUBLIC_URL}/ui-kits/tab-line` },
                ]
            },
            { path: `${process.env.PUBLIC_URL}/ui-kits/shadow`, title: 'Shadow', type: 'link' },
            { path: `${process.env.PUBLIC_URL}/ui-kits/list`, title: 'List', type: 'link' },
            
            ]
            },

            {
                title: 'Bonus Ui', icon: FolderPlus,  type: 'sub', badge1: true, active: false, children: [
                    { path: `${process.env.PUBLIC_URL}/bonus-ui/scrollable`, title: 'Scrollable ', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/bonus-ui/bootstrap-notify`, title: 'Bootstrap Notify ', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/bonus-ui/rating`, title: 'Rating', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/bonus-ui/dropzone`, title: 'Dropzone', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/bonus-ui/tourComponent`, title: 'Tour ', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/bonus-ui/sweetAlert`, title: 'SweetAlert ', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/bonus-ui/carousel`, title: 'Owl Carousel', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/bonus-ui/ribbons`, title: 'Ribbons', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/bonus-ui/pagination`, title: 'Pagination', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/bonus-ui/breadcrumb`, title: 'Breadcrumb ', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/bonus-ui/rangeSlider`, title: 'Range Slider ', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/bonus-ui/imageCropper`, title: 'Image Cropper ', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/bonus-ui/stickyNotes`, title: 'Sticky ', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/bonus-ui/dragNDropComp`, title: 'Drag and Drop ', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/bonus-ui/image-upload`, title: 'Upload', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/bonus-ui/card/basicCards`, title: 'Basic Card ', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/bonus-ui/card/creativeCards`, title: 'Creative Card ', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/bonus-ui/card/tabCard`, title: 'Tabbed Card ', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/bonus-ui/card/draggingCards`, title: 'Draggable Card', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/bonus-ui/timelines/timeline1`, title: 'Timeline', type: 'link' }
            ]
            },

            {
                title: 'Icons', icon: Command, path: `${process.env.PUBLIC_URL}/icons/flagIcons`, type: 'sub', active: false, bookmark: true, children: [
                    { path: `${process.env.PUBLIC_URL}/icons/flagIcons`, title: 'Flag Icon', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/icons/fontAwsomeIcon`, title: 'Fontawesome Icon ', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/icons/icoIcons`, title: 'Ico Icon ', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/icons/themifyIcons`, title: 'Themify Icon ', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/icons/featherIcons`, title: 'Feather Icon ', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/icons/weatherIcons`, title: 'Whether Icon ', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/icons/simplelineIcon`, title: 'Simple Line Icon ', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/icons/material-design-icon`, title: 'Material Design Icon ', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/icons/pe7-icon`, title: 'Pe7 Icon', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/icons/typicons-icon`, title: 'Typicons Icon ', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/icons/ionic-icon`, title: 'Ionic Icon ', type: 'link' },
            ]
            },

            {
            
                title: 'Buttons', icon: Cloud, type: 'sub', active: false, children: [
                    { path: `${process.env.PUBLIC_URL}/buttons/default-btn`, title: 'Default Style ', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/buttons/flatBtn`, title: 'Flat Style', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/buttons/edgeBtn`, title: 'Edge Style', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/buttons/raisedBtn`, title: 'Raised Style', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/buttons/groupBtn`, title: 'Button Group', type: 'link' },
            ]
            },

            {
                title: 'Charts', icon: BarChart, type: 'sub', active: false, children: [
                    { path: `${process.env.PUBLIC_URL}/charts/apexCharts`, type: 'link', title: 'Apex Chart' },
                    { path: `${process.env.PUBLIC_URL}/charts/googleChart`, type: 'link', title: 'Google Chart' },
                    { path: `${process.env.PUBLIC_URL}/charts/knobChart`, type: 'link', title: 'Knob Chart' },
                    { path: `${process.env.PUBLIC_URL}/charts/chartJs`, type: 'link', title: 'Chartjs' },
                    { path: `${process.env.PUBLIC_URL}/charts/chartistComponent`, type: 'link', title: 'Chartist' },
            ]
            },

        ]
    }
    
    
    

]