import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Acceuil
            </li>
            </Link>
           
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            
            <Link to="/SIG/notaffected" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Signalements Non affectée
              </li>
            </Link>
            <Link to="/SIG/affected" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Signalements  affectée
              </li>
            </Link>
            <Link to="/SIG/all" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Signalements  
              </li>
            </Link>

          </ul>

        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Gestions des elements</h3>
          <ul className="sidebarList">
            <Link to="/gestion/Region" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Regions
            </li>
            </Link>
           
          </ul>
          <ul className="sidebarList">
            <Link to="/gestion/Signalement" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Signalements
            </li>
            </Link>
           
          </ul>
        </div>
        
        
      </div>
    </div>
  );
}
