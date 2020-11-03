import React from "react"
import Layout from "../components/layout"
import ManifestoItem from "../components/manifesto-item"

export default function TheCollective() {
  return (
    <div>
      <Layout page="MANIFESTO">
        <div class="container-top">
          <ManifestoItem size="big">
            <h2>
              We need more legal migration channels, we need safe passages.
            </h2>
            <p>
              Migration has always been part of history and the right of asylum
              is a moral and legal obligation. Violently guarding borders will
              not eliminate the cause of fleeing and will therefore not stop
              human trafficking.
            </p>
          </ManifestoItem>
          <ManifestoItem size="medium">
            <h2>
              No border should be more worthy of protection than a human life.
            </h2>
            <p>
              For years people have been dying trying to cross the border to
              Europe. On both sides of the borders people are stuck in camps,
              where human rights are violated. Making Europe a fortress cannot
              be an option.
            </p>
          </ManifestoItem>
          <ManifestoItem size="extra-big">
            <h2>Economy should serve, not restrict humans.</h2>
            <p>
              As long as there is unequal access to opportunities and resources
              people will continue to migrate in need of a better life.
              Profiting from war by dealing weapons and exploiting natural
              resources of developing countries is causing even more people to
              flee. We condemn the economic system that focuses on exploitation,
              financial gain and power. We remind the European Union on their
              commitment to protect our environment and on their promise of
              de-escalation and demilitarisation.
            </p>
          </ManifestoItem>
        </div>
        <div class="container-middle">
          <ManifestoItem size="extra-big">
            <h2>
              Human Rights must be the fundamental basis of every political
              decision.
            </h2>
            <p>
              To cooperate with unstable governments like Libya, where human
              rights are utterly disregarded, and with autocratic leaders, that
              respond to nothing but their own interests, is shameful. We are
              outraged by the dirty deals the European Union continues to make.
            </p>
          </ManifestoItem>
          <ManifestoItem size="small">
            <h2>We need informed and critical citizens.</h2>
            <p>
              Dangerous myths arise out of misinformation and generalisation. We
              strive to access and spread reliable information.
            </p>
          </ManifestoItem>
          <ManifestoItem size="big">
            <h2>Humanitarian aid is a duty, never a crime.</h2>
            <p>
              The criminalization of humanitarian aid workers is misplaced and
              negligent. NGOs respond to an emergency the governments should
              have taken responsibility for.
            </p>
          </ManifestoItem>
        </div>
        <div class="container-middle">
          <ManifestoItem size="extra-big">
            <h2>We want democracy, integrity and transparency.</h2>
            <p>
              Let us not be fooled by nationalistic speeches that promote fear,
              discrimination and division. Using this tragedy to spread
              xenophobic views and win political power is unacceptable.
            </p>
          </ManifestoItem>
          <ManifestoItem size="extra-big">
            <h2>
              We believe collective action has the power to change the world.
            </h2>
            <p>
              Let us unite against the growing apathy towards the violation of
              Human Rights. We want to raise awareness and we are calling for
              action. These are our rights. This is our problem.
            </p>
          </ManifestoItem>
        </div>
        <div class="container-bottom">
          <ManifestoItem size="big">
            <h2>We believe individual action makes a difference.</h2>
            <p>
              Whoever chooses to assume a passive position accepts and
              perpetuates migrant deaths. Silence leaves space for many more
              Human Rights violations. We are not letting this pass unnoticed.
            </p>
          </ManifestoItem>
        </div>
      </Layout>
    </div>
  )
}
