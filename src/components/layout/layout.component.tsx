import { FooterComponent, HeaderComponent } from "Components"
import * as React from "react"
// import { StaticQuery, graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms"
import "./layout.component.sass"

interface ILayoutComponentProps {
    name: string
    children: React.ReactElement<any>
}

export function LayoutComponent({ children, name }: ILayoutComponentProps) {
    const renderContent = (data: any) => {
        return (
            <React.Fragment>
                <HelmetDatoCms />
                <HeaderComponent />
                <main className={`page page_${name}`}>{children}</main>
                <FooterComponent />
            </React.Fragment>
        )
    }
    return (
        <React.Fragment>
            {/* <StaticQuery 
                // query = {graphql`
                //     query LayoutQuery {
                //     }
                // `}
                query = {graphql}
                render={renderContent}
            /> */}
            {renderContent({})}
        </React.Fragment>
    )
}
