'use client'
import React from 'react';
import { Compass, Menu as MenuIcon, StickyNote, BarChartBig, CircleUserRound, SquareUserRound, Network, X, BellRing, LayoutDashboard, Building2, UsersRound, UserRoundCog, } from 'lucide-react';
import { useRouter } from 'next/navigation';
// There are some object keys with ussage:
interface MenuItem {
  title: "heading" | "button" | "option";
  name: string;
  routes?: MenuItem[];
  path?: string;
  icon?: string;
  options?: MenuItem[];
  id: string,
}

export const AdminMenuData: MenuItem[] = [
  // home
  {
    id: "1",
    title: "heading",
    name: "home",
    routes: [
      {
        id: "2",
        title: "button",
        name: "Dashboard",
        path: "/",
        icon: "LayoutDashboard",
      },
    ],
  },
  // Peoples Management
  {
    id: "3",
    title: "heading",
    name: "Peoples Management",
    routes: [
      {
        id: "4",
        title: "button",
        name: "Member Management",
        path: "/member",
        icon: "UsersRound",
      },
      {
        id: "5",
        title: "option",
        name: "User Management",
        icon: "UserRoundCog",
        options: [
          {
            id: "6",
            title: "button",
            name: "Team and Roles",
            path: "/role",
            icon: "UserRoundCog",
          },
          {
            id: "7",
            title: "button",
            name: "user Management",
            path: "/user",
            icon: "UserRoundCog",
          },
        ],
      },
    ],
  },
  // Company
  {
    id: "8",
    title: "heading",
    name: "Company",
    routes: [
      {
        id: "9",
        title: "button",
        name: "Company Profile",
        path: "/companyprofile",
        icon: "Building2",
      },
      {
        id: "10",
        title: "button",
        name: "Push Notification",
        path: "/pushnotification",
        icon: "BellRing",
      },
      {
        id: "11",
        title: "button",
        name: "Sticky Notes",
        path: "/stickynote",
        icon: "StickyNote",
      },
      {
        id: "12",
        title: "option",
        name: "Jobs",
        icon: "Network",
        options: [
          {
            id: "13",
            title: "button",
            name: "Career",
            path: "/career",
            icon: "BarChartBig",
          },
          {
            id: "14",
            title: "button",
            name: "Volunteer",
            path: "/volunteer",
            icon: "CircleUserRound",
          },
          {
            id: "15",
            title: "button",
            name: "Influencer",
            path: "/influencer",
            icon: "SquareUserRound",
          },
        ],
      },
    ],
  },
  // Bussiness
  {
    id: "16",
    title: "heading",
    name: "Bussiness",
    routes: [
      {
        id: "17",
        title: "option",
        name: "Lead Management",
        icon: "Pencil",
        options: [
          {
            id: "18",
            title: "button",
            name: "Lead Management",
            path: "/leadmanagement",
            icon: "FilePen",
          },
          {
            id: "19",
            title: "button",
            name: "Tag",
            path: "/tag",
            icon: "Tag",
          },
          {
            id: "20",
            title: "button",
            name: "Lead Report",
            path: "/leadreport",
            icon: "ListTodo",
          },
        ],
      },
      {
        id: "21",
        title: "option",
        name: "All Invoices Management",
        icon: "ShoppingCart",
        options: [
          {
            id: "22",
            title: "button",
            name: "All Invoices",
            path: "/allinvoice",
            icon: "FileStack",
          },
          {
            id: "23",
            title: "button",
            name: "Add Invoices",
            path: "/addinvoices",
            icon: "FilePlus2",
          },
        ],
      },
      {
        id: "24",
        title: "button",
        name: "Expense Management",
        path: "/expensemanagement",
        icon: "Receipt",
      },
    ],
  },
  // Before Trek
  {
    id: "25",
    title: "heading",
    name: "Before Trek",
    routes: [
      {
        id: "26",
        title: "option",
        name: "Coupon",
        icon: "Percent",
        options: [
          {
            id: "27",
            title: "button",
            name: "Discount",
            path: "/discount",
            icon: "PercentCircle",
          },
          {
            id: "28",
            title: "button",
            name: "Voucher",
            path: "/voucher",
            icon: "TicketPercent",
          },
        ],
      },
      {
        id: "29",
        title: "button",
        name: "Customization Request",
        path: "/customizationrequest",
        icon: "Settings",
      },
      {
        id: "30",
        title: "button",
        name: "Orders Management",
        path: "/ordersmanagement",
        icon: "Folder",
      },
    ],
  },
  // During Trek
  {
    id: "31",
    title: "heading",
    name: "During Trek",
    routes: [
      {
        id: "32",
        title: "button",
        name: "WhatsApp Group",
        path: "/whatsappgroup",
        icon: "MessageSquareText",
      },
    ],
  },
  // After Trek
  {
    id: "33",
    title: "heading",
    name: "After Trek",
    routes: [
      {
        id: "34",
        title: "button",
        name: "Rewards Point",
        path: "/rewardspoint",
        icon: "Trophy",
      },
      {
        id: "35",
        title: "button",
        name: "Certification Generator",
        path: "/certificationgenerator",
        icon: "Album",
      },
      {
        id: "36",
        title: "button",
        name: "Post Adventure",
        path: "/postadventure",
        icon: "Package",
      },
      {
        id: "37",
        title: "button",
        name: "Mailing List",
        path: "/mailinglist",
        icon: "Mail",
      },
    ],
  },
  // Social Responsibility
  {
    id: "38",
    title: "heading",
    name: "Social Responsibility",
    routes: [
      { id:"39",
        title: "button",
        name: "Trek For a Cause",
        path: "/trekforacause",
        icon: "TentTree",
      },
    ],
  },
  // // Main App

  {
    id: "40",
    title: "heading",
    name: "Main App",
    routes: [
      {
        id: "41",
        title: "option",
        name: "Pages Management",
        icon: "UsersRound",
        options: [
          {
            id: "42",
            title: "button",
            name: "Page Category",
            path: "/pagecategory",
            icon: "UsersRound",
          },
          {
            id: "43",
            title: "button",
            name: "Page Sub-Category",
            path: "/pagesubcategory",
            icon: "UsersRound",
          },
          {
            id: "44",
            title: "button",
            name: "Page",
            path: "/page",
            icon: "UsersRound",
          },
        ],
      },
      {
        id: "45",
        title: "button",
        name: "Media Management",
        path: "/mediamanagement",
        icon: "Image",
      },
      {
        id: "46",
        title: "button",
        name: "Product Management",
        path: "/productmanagement",
        icon: "UsersRound",
      },
      {
        id: "47",
        title: "option",
        name: "Product Setting",
        icon: "UsersRound",
        options: [
          {
            id: "48",
            title: "button",
            name: "All Category",
            path: "/allcategory",
            icon: "Setting",
          },
          {
            id: "49",
            title: "button",
            name: "All Destination",
            path: "/alldestination",
            icon: "LandPlot",
          },
          {
            id: "50",
            title: "button",
            name: "Season",
            path: "/season",
            icon: "Sun",
          },
          {
            id: "51",
            title: "button",
            name: "Difficulty",
            path: "/difficulty",
            icon: "LineChart",
          },
          {
            id: "52",
            title: "button",
            name: "Gears",
            path: "/gears",
            icon: "Wrench",
          },
          {
            id: "53",
            title: "button",
            name: "Month",
            path: "/month",
            icon: "CalendarCheck",
          },
          {
            id: "54",
            title: "button",
            name: "Settings",
            path: "/settings",
            icon: "Setting",
          },
          {
            id: "55",
            title: "button",
            name: "SEO",
            path: "/seo",
            icon: "FolderSearch",
          },
          {
            id: "56",
            title: "button",
            name: "Pop Ups",
            path: "/popups",
            icon: "Megaphone",
          },
          {
            id: "57",
            title: "button",
            name: "Crone",
            path: "/crone",
            icon: "SquareStack",
          },
        ],
      },
      {
        id: "58",
        title: "button",
        name: "Upcoming Adventure",
        path: "/upcomingadventure",
        icon: "Tent",
      },
      {
        id: "59",
        title: "option",
        name: "Blog Management",
        icon: "NotebookPen",
        options: [
          {
            id: "60",
            title: "button",
            name: "Blog Category",
            path: "/blogcategory",
            icon: "NotebookText",
          },
          {
            id: "61",
            title: "button",
            name: "Blog",
            path: "/blog",
            icon: "FileType",
          },
          {
            id: "62",
            title: "button",
            name: "Comment",
            path: "/comment",
            icon: "MessageSquareText",
          },
          {
            id: "63",
            title: "button",
            name: "Setting",
            path: "/blogsetting",
            icon: "Setting",
          },
        ],
      },
      {
        id: "64",
        title: "button",
        name: "Review Management",
        path: "/review",
        icon: "Star",
      },
      {
        id: "65",
        title: "button",
        name: "Faq",
        path: "/faq",
        icon: "HelpCircle",
      },
    ],
  },
];