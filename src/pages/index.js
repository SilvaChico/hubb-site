import React from "react"
import Layout from "../components/layout"
import ManifestoItem from "../components/manifesto-item"

export default function Home() {
  return (
    <div>
      <Layout page="HOME">
        <div class="container-top">
          <ManifestoItem size="big">
            <h2>HuBBgrade Yourself</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non
              erat condimentum, bibendum orci id, congue lorem. Vivamus luctus,
              purus.
            </p>
          </ManifestoItem>
          <ManifestoItem size="small">
            <h2>Straight to the Point</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non
              erat condimentum, bibendum orci id, congue lorem. Vivamus luctus,
              purus.
            </p>
          </ManifestoItem>
          <ManifestoItem size="big">
            <h2>Humanitarian Minute</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non
              erat condimentum, bibendum orci id, congue lorem. Vivamus luctus,
              purus.
            </p>
          </ManifestoItem>
        </div>
        <div class="container-middle">
          <ManifestoItem size="extra-big">
            <h2>Event x</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              varius felis ex, vitae tincidunt urna mattis sit amet. Vivamus
              lobortis sagittis libero sed rhoncus. Ut non vehicula est, non
              fringilla purus. Curabitur nulla diam, eleifend in augue
              vestibulum, placerat faucibus.
            </p>
          </ManifestoItem>
          <ManifestoItem size="big">
            <h2>In Solidarity With</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non
              erat condimentum, bibendum orci id, congue lorem. Vivamus luctus,
              purus.
            </p>
          </ManifestoItem>
        </div>
        <div class="container-bottom">
          <ManifestoItem size="extra-big">
            <h2>Volunteering Opportunities</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </ManifestoItem>
          <ManifestoItem size="small">
            <h2>NGO's in the Field</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </ManifestoItem>
        </div>
      </Layout>
    </div>
  )
}
