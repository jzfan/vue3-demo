<template>
  <div class="begin__3d1P0">
    <div>
      <p>
        For people who are not yet familiar with our product: Dexmo is a
        commercialized lightweight, wireless, force feedback glove. It offers
        the most compelling force feedback experience with both motion capture
        and force feedback abilities, designed for the use in training,
        education, medical, gaming, simulation, aerospace and much more. Dexmo
        is the most easy-to-use force feedback glove, designed for both
        researchers, enterprises and consumers. Its natural and intuitive
        interaction enables everyone to seamlessly touch a truly immersive VR
        world.
      </p>
      <p>
        Fancy tech demos are not uncommon these days. What’s special about Dexmo
        is that it is far beyond just a concept. It not only works, but it also
        works well. And most importantly, we are already mass manufacturing
        them, bringing the technology a further step closer to the public.
      </p>
      <p>
        But before we go into the final product details, I would like to share
        with you some of my thoughts first, including how we got started, the
        importance of interaction in VR, what drives us and then the latest
        advancements in our products.。
      </p>
    </div>
    <div class="video__3mb7h">
      <ul class="video__bVhmv">
        <this-video
          :item="{
            cover: '/img/pro-20.png',
            src:
              'https://oss-main.dextarobotics.com/videos/experience/1-factory.mp4',
          }"
        />
      </ul>
    </div>
  </div>
  <div class="begin__3d1P0">
    <a id="id1"></a>
    <h2>Project Inception:</h2>
    <div>
      <p>
        In 2013, when I first saw Oculus Rift, I was thrilled by the idea.
        Seeing its development I started to understand it could be way more than
        just a gaming gadget. It was the first step towards the next page of
        media. If we take a look into the history of media development: started
        from writing letters, to sending photos, to publishing newspapers, to
        using radio, to television, to personal computers, to smartphones, we
        humans have come a long way. Our technology advancements have allowed us
        to communicate with a gradually increasing information density over the
        course of history. We constantly try our best to build technologies that
        approximate and simulate our real-life interactions.
      </p>
      <p>
        But does our current technology allow two distant people to communicate
        as if they were sitting next to each other yet? Apparently not. They
        can’t see each other’s body movement, neither can they hand objects over
        to another. There are still lots of room for improvement. Every time
        when an incrementally better media technology matures, it changes
        generations of people’s lives fundamentally. VR/MR, transforming
        everything from 2D to 3D is nothing but a logical step that comes after.
        However, in what form exactly?
      </p>
      <p>
        There were many people working on headsets, but it takes much more than
        just a good headset to have a fully immersive experience. There are some
        other equally important problems to be solved. We have all seen those
        goofy photos of someone wearing a headset with their hands extended in
        front of their face when there is nothing for taking their hands into
        VR. I realized something was obviously missing. Hands, being an
        extension of our mind, enables the most natural human interaction.
      </p>
    </div>
    <img src="/img/pro-2.gif" />
    <div>
      <p>
        It wasn’t just me. I was told by many VR enthusiasts that they not only
        wanted to use their hands in VR, but also wanted to feel objects they
        are grasping. Sadly such technology didn’t really exist at that time.
        The closest available products back then were mostly cable-driven, had
        their motor box far at the other end, and were highly expensive. They
        were bulky, out-of-date, difficult to manufacture or repair in large
        volume, and far too complicated for the general consumers.
      </p>
      <p>
        I have always been very passionate about robotics. And I like a
        challenge. Thus, I felt it was my responsibility to build something that
        helps with my understanding of the technology. Forget about what data
        gloves looked like in the past. What form would a consumer-friendly
        force feedback glove really take? Having that idea in mind, we ended up
        re-designing everything from the ground up, and that’s where the idea
        for the Dexmo project was created.
      </p>
    </div>
  </div>
  <div class="begin__3d1P0">
    <a id="id2"></a>
    <h2>Why is it Important:</h2>
    <div>
      <p>
        When the PC was first invented, it was a cool gadget for a rather small
        crowd. You would need to know how to use command lines to work with a
        PC. It was not until mouse and GUI(Graphical User Interface) were
        introduced into the system could people with zero technical background
        use a PC and did it start to walk into mainstream. It’s hard to imagine
        Win3.0 could sell over 4 million units without being that user-friendly.
      </p>
      <p>
        There were already dozens of smartphone attempts on the market before
        iPhone. But they failed to acquire the mass general consumers’
        attention, because they were expensive and difficult to use. However,
        the iPhone succeeded with its amazing touchscreen plus touch-based GUI
        interface. When a five-year-old could swipe its finger and play games
        without even reading the manual, you can definitely recognize its
        tremendous success in lowering the learning cost.
      </p>
      <p>
        VR/MR is facing the same issue here. In order for any new media
        technology to go to mass market, it has to be truly “easy-to-use”. And
        it can be very difficult to find the most appropriate approach. As much
        as I appreciate controllers, they just did not seem to be intuitive
        enough. If you are a gamer you know how controllers work. Good. But if
        you are new to it, it could take a long time for you to get used to the
        keys and joystick controls. Well, how should we solve this?
      </p>
      <p>When iPhone was introduced to the world, Steve Jobs famously said:</p>
    </div>
    <div class="jobs__1Nf9w">
      <div>
        <p>
          They (referring to other smartphone products) all have these keyboards
          that are there whether you need them or not to be there.
        </p>
        <p>
          And they all have these control buttons that are fixed in plastic and
          are the same for every application. Well, every application wants a
          slightly different user interface, a slightly optimized set of
          buttons, just for it. And what happens if you think of a great idea
          six months from now? You can’t run around and add a button to these
          things. They’re already shipped.
        </p>
        <p>So what do you do?</p>
        <p>
          It doesn’t work because the buttons and the controls can’t change.
          They can’t change for each application, and they can’t change down the
          road if you think of another great idea you wanna add to this product.
        </p>
      </div>
    </div>
    <img src="/img/pro-3.png" />
    <div>
      <p>
        I personally feel this is strongly relatable to the current VR
        situation. Motion controllers have fixed keys and controls and only
        partially recreate a hand-like experience. Instead of directly building
        different interfaces in different applications based on our natural
        hand-using habits, every developer has to tweak their applications based
        on a specific controller hardware. In order to use the application, end
        users have to learn how to use the hardware first, thus limiting the
        growth of the market, making it increasingly difficult for the
        developers to make money.
      </p>
      <p>
        There is a well-known paradox that is debated: in a software ecosystem
        whether do the users come first or do developers come first. I gave it a
        lot of thoughts in the past few years and arrived at a conclusion: Users
        first. Whenever a new ecosystem is formed, if it fails to attract users,
        the developers in the longer terms won’t be motivated enough to
        continuously develop for this platform. Surface RT is a good negative
        example, and Oculus in the early days too. The key is to lower the cost
        of entry for the users. When everything just works and no learning is
        needed for users to join, even when there are only a few applications,
        they will join. Because the attraction is greater than obstacles.
        Similar to what iPhone did when it came out, it was so intuitive that
        people who didn’t even think they needed a smartphone started using
        them. Simple games helped developers make millions of dollars. And this
        positively motivates the developers to join. This is what we need for VR
        as well. That’s why I firmly believe that we could help.
      </p>
      <p>
        For example, imagine you are opening a map in real life. What do you do?
        You reach for the map from your backpack, open it up to look at it. That
        experience can be made possible using proper interaction technology. In
        VR with the current hardware, that turns into: “click the grip button on
        your controller to open the manual, and use the beam from your other
        controller to target at the map option on the manual and pull the
        trigger to confirm your selection.” It is made unnecessarily complicated
        due to the current limitation of hardware.
      </p>
      <p>
        But from an engineering point of view, it makes sense. Because building
        a stable controller hardware is much easier than building a pair of
        working force feedback gloves. Don’t get me wrong, I greatly appreciate
        controllers. Without them there won’t even be any hand presence
        experience at all in VR yet. But apparently, we as humans, can’t stop
        here. As difficult as it might be, we should do what’s right rather than
        what’s easy. We have to keep refining our technology until it all
        becomes “Stupid Easy”. Because then and only then will ordinary people
        start using VR. Not just gamers, not just VR fans, but everyday people.
        And that’s what drives us to build this product.
      </p>
    </div>
  </div>

  <div class="begin__3d1P0">
    <a id="id3"></a>
    <h2>Background Knowledge:</h2>
    <p>
      Before I dive into the product talk, I should lay out some background info
      and point out some of the common misunderstandings in the field of HCI,
      for people to understand better.
    </p>
    <img src="/img/pro-4.jpeg" />
    <div>
      <p>
        This chart demonstrates some of the representative means of
        human-machine- interaction(HCI) in VR. The order is based on
        functionalities, not necessarily by the date of launch. To make it easy
        I used tick and cross for each functionality but there are subtle
        differences between different method and to fully understand them,
        further explanation is needed.
      </p>
      <p>
        It starts with an ordinary controller where gamers are familiar with. It
        has control buttons, joysticks and vibration motors to provide feedback.
        However, it does not bring hand presence in VR, let along positional
        tracking. PS4 controllers fixed the tracking issue, but it is still very
        limited.
      </p>
      <p>
        A milestone that comes after that was the Vive motion controllers, where
        for the first time users can have their separate hand position input
        back into VR, and pick up objects by pulling the trigger. It has a grip
        button on sides of the controller built with the intention for people to
        easily “grip virtual objects” but the actual user experience was not
        extraordinary satisfactory. Many people got confused the first time and
        dropped the controller when they released the grip button.
      </p>
    </div>
    <img src="/img/pro-5.gif" />
    <p>
      Oculus Touch, while serving most offerings that Vive controller does,
      offers much greater ergonomics and primitive partial finger tracking:
      binary tracking (on or off only) for the thumb and the index finger. It
      only works on two fingers and does not allow for the analog (continuous)
      tracking of the exact finger flexion. The rest three fingers flexes
      together when the grip button is pressed. It was a very helpful step to
      bring hand presence a bit closer to the users, but still limited in many
      ways.
    </p>
    <img src="/img/pro-6.gif" />
    <p>
      Valve’s Knuckles, now called Index controllers, on top of what Touch
      offers, further improves hand tracking. It incorporates an additional set
      of sensors on its handle to allow full five finger tracking and develops a
      very innovative wearing ergonomics which allows users to fully open their
      hand without dropping the controller. It is the most capable motion
      controller up to date. That being said, its finger tracking is still
      limited (continues detection works only in close proximity ( finger
      flexion &lt; 30°). It switches to on-and-off detection in far range (
      >30°)) and has limited degrees of freedom (DoF) of five: one for each
      finger, meaning you can’t input the rotation of thumb and the splitting of
      four fingers into VR.
    </p>
    <p>
      On a different track, there is Leap motion and some other vision-based
      hand tracking solutions. They offer real size full hand tracking with
      continuous finger flexing tracking but understandably there is zero means
      of feedback. Not even the old-fashion vibration-based haptics. Although it
      captures hand motion at a much higher precision and higher degrees of
      freedom (notably on the split of fingers and thumb dexterity), the
      reliability of tracking is debatable. Due to its vision-based solution, if
      a hand is blocked from the camera, it loses tracking instantly.
    </p>
    <img src="/img/pro-7.gif" />
    <div>
      <p>
        Another track for fine hand tracking is data gloves. Most data gloves
        use flex sensor based or IMU (inertia-measuring-units)based solutions
        which track 5–10 DoF of hand motion based on the number of sensors use,
        giving them capabilities to capture continuous finger flexion. Flex
        sensors change resistance based on their physical deformation, which
        implies the sensor’s limited lifespan. IMU-based solutions incorporate
        data fusion with a magnetometer, accelerometer and gyroscope to recreate
        the 3DoF orientation of each finger and work backwards using
        inverse-kinematics to regenerate hand models. The pros are the sensor
        itself does not physically deform so it does not wear, however due to
        its inertia-based nature, the reliability of the data isn’t brilliant,
        resulting in “data drifting” which requires frequent re-calibration. The
        reliability is influenced by metal, magnets and magnetic fields around.
        This is the very reason why it is difficult to put multiple vibration
        motors near IMU based gloves. Because every time it activates, the
        magnetic field changes and the data stability suffers, so the hand model
        can look very weird to users. This nature limits data gloves’ feedback
        system. That’s why we see many of the gloves only have one motor poorly
        mounted on the wrist: clearly not the best number or place for optimized
        experience.
      </p>
      <p>
        Lastly, there’s our solution. The mechanical exoskeleton moves with
        users’ hand and transduces its motion to rotational sensors built within
        the system and produces force feedback to each of the fingertip. It
        captures 11 DoF of hand motion, thus reconstructs the hand model at a
        very realistic level of precision. The force feedback function
        physically stops the users’ finger from penetrating through a digital
        object and thus allows users to feel its shape, size and stiffness.
        Although it takes up larger space than other solutions, this is a very
        reliable way of capturing continuous finger motion. And the size also
        gives us enough space to put in the force feedback units. Physical
        buttons and Joysticks on controllers seem redundant because you can
        press virtual buttons and use virtual joysticks in VR if needed.
        Regardless how many of them you need, it adds no cost. While not
        sacrificing hand dexterity, we manage to add force feedback to a
        portable sized glove for the first time in the commercialized data glove
        history.
      </p>
      <p>
        If we look back the development of controllers, the trend was pretty
        obvious. Hand presence was getting increasingly important, and different
        parties tried different methods to make it right. Each product was a
        result of trade-offs. Controller track tried to add finger tracking into
        its hardware, but the tracking precision and force feedback abilities
        were limited due to the size of the hardware and tracking method chosen.
        This is the trade-off of not letting go of the controller form
        factor.Controllers are rather inexpensive to manufacture, and for now it
        is very helpful for bridging the already-large gamer group, but if we
        want this to go beyond just gamers, it needs to be pushed further.
        Vision-based tracking doesn’t require the users to wear anything, which
        lowers the “wearing cost”. But the unreliable tracking can instantly
        break the immersion and the lack of feedback makes it hard for users to
        know what they are actually doing. Data gloves kind of lie in between.
        It offers rather reliable hand tracking with occasional small glitches,
        and the ability to provide some form of feedback. But it requires people
        to wiggle their hand to put it on, which can be quite discouraging in
        comparison to just easily pick up a pair of controllers. The single
        point haptics it uses does not give user enough feedback for their hands
        as well. A really balanced solution that makes the experience overall
        easy-to-use is yet to be found.
      </p>
      <p>
        I am not saying Dexmo is the best form of HCI, because it still has much
        to improve. There may be temperature feedback, texture feedback and a
        lot of other types of feedback to continuously improve immersion. But
        force feedback does bring an incredible amount of immersion into VR and
        is definitely a great step further.
      </p>
      <p>
        Another thing I would like to add is that feedback-adding does have to
        follow a certain order. Force feedback involves motor placement and
        transmission, which takes up a huge space. This can greatly alter its
        form factor. It is much easier to figure this out first then to add
        other forms of feedback than do it in other order instead. This is why I
        think our exoskeleton design marks a good starting point in the
        revolution of VR HCI.
      </p>
    </div>
  </div>
  <div class="begin__3d1P0">
    <h2>Some common misunderstandings:</h2>
    <h3>Global tracking & Local tracking:</h3>
    <p>
      Global tracking (positional tracking) and local tracking (finger/ hand
      tracking) are different concepts. In the article when I talk about gloves,
      I am mainly focusing on their local tracking abilities. The positional
      tracking of gloves can be achieved by attaching existing tracking
      technology (i.e. the Vive tracker, Optitrack markers, etc.), so I omitted
      this part in the discussion.
    </p>
    <h3>Finger tracking & Hand tracking:</h3>
    <p>
      Although many hardware somewhat incorporates hand presence, but it is
      achieved to different extent. The main comparing criteria are “Finger
      flexion continuity”, “Degrees of freedom”, “Reliability” and “Overall
      experience” rather than just the “Precision” alone where most people used
      falsely. Apparently, it is not fair to say a “precise but unreliable”
      solution is better than a “reliable and has higher DoF but less precise”
      one. There are more criteria than just precision.
    </p>
    <p>
      Being able to flex your finger at any angle you want in VR is different
      than only being able to have them in either of the two states: extended or
      flexed. This difference is caused by different tracking methods. Touch,
      and Knuckles used proximity sensors for binary detection of fingers, thus
      they can only detect on and off of fingers and compensate in graphics
      using animations, and they only capture 3/5 DoF of finger motion
      respectively. On the other hand, data gloves and vision-based solutions
      can detect the exact finger flexion at higher scale division and detect
      hand motion at much higher DoF. But because the controllers produce binary
      data, they can be much more reliable. Vision-based solution has higher
      exact-precision, but due to the blockage-caused tracking-lost, its
      over-all experience is debatable.
    </p>
    <p>
      Thumb tracking is also very important on its own. For most hand tracking
      solutions, the purpose is purely to recreate a virtual hand that looks
      like a real hand rather than one that works like a real hand. For example,
      when you grasp with a motion controller, the virtual hand closes
      automatically and then the controller rumbles. The hand model and the
      animation are just good enough to fool the users. This is viable when no
      specific feedback is needed to be applied based on each finger movement.
      But not with realistic force feedback or even haptic feedback. In order to
      have the force or rumble at the exact right place and with the exact right
      magnitude, the virtual-regeneration of hands needs to be as close to
      reality as possible. Our thumb has 3 degrees of freedom. It would be
      impossible to accurately feedback if we ignore thumb data in the first
      place. And that is why our Dexmo is equipped with the ability to capture
      all the thumb movements.
    </p>
    <h3>Haptics & Force feedback:</h3>
    <p>
      Haptics is so widely used nowadays that it can be a very misleading word
      sometimes. Haptics originally means “any form of interaction involving
      touch”, which covers a lot of things: from vibration, texture,
      temperature, to force conduction. But because many game controllers have a
      vibration motor inside and they promote it as “haptics feedback”, many
      people narrowly see “haptics” as ”vibration”, which is a common
      misconception.
    </p>
    <p>
      There are many forms of haptics. To help people understand, I will give
      examples with products, mainly explaining the differences between
      different types of vibration and force feedback:
    </p>
    <ul>
      <li>
        Single point vibration: Xbox controller (two points on each side of the
        handle), Motion controllers, some data gloves.
      </li>
      <li>
        Multiple point vibration: VR feedback vest that has motors distributed
        all across the surface.
      </li>
      <li>
        Point Force Feedback: Phantom Seansable Arm, Novint Falcon, that
        provides 6DoF of force feedback to a single point in space.
      </li>
      <li>
        Multi-point Force Feedback: Dexmo, that provides local force feedback to
        multiple points in space.
      </li>
    </ul>
  </div>
  <div class="begin__3d1P0">
    <a id="id4"></a>
    <h2>Product Development:</h2>
    <p>
      Before even started doing anything, I spent a large amount of time
      thinking about how to make it easy for everybody. The answer was to lower
      the cost on all aspects. I wasn’t just talking about the cost of hardware,
      but the cost for learning how to use it, cost for wearing it, cost for
      making it, cost for developing software for it, etc.. That breaks down
      into many different aspects of product. For example, for people to use it
      seamlessly, the product itself cannot have a huge physical presence. If it
      is too heavy, or goes up to your wrist, or has wires pulling back
      everywhere, you can’t imagine it being user-friendly enough because it
      breaks the immersion every time you realize it’s there. And that’s what we
      have to work with. We have to figure out how to get the best performance
      out of it, being aware of the size and many other limits. Having the
      guiding principle in mind, we started our exploration.
    </p>
    <img src="/img/pro-8.png" />
    <div>
      <p>
        We had our first public appearances in 2014 where I had the initial idea
        of building an exoskeleton that could not only capture hand motion, but
        also on top of it, provide binary force feedback using a miniature
        braking disc mechanism. The attempt was successful. It worked, but it
        wasn’t good enough. The biggest flaw was huge latency and inconsistent
        force feedback induced by the mechanical brake. So we started over.
      </p>
      <p>
        In 2016 we announced the new Dexmo. Though inheriting the exoskeleton
        look, it was actually based on a completely different robotic
        architectural, capable of outputting continuous torque with a reasonable
        latency of 50ms. It was a huge deal because it proved that direct drive
        force feedback gloves might actually work. Despite being called “bulky”,
        it showed a viable form factor of a future force feedback glove.
      </p>
      <p>
        It wasn’t just about making something that works. It was about
        balancing, and understanding the difference between what we could do and
        what we should do. For example, we could use 20 motors per hand to
        create the most realistic force feedback glove, but it would weigh 1kg,
        be ridiculously expensive and impossible to wear, which defeated the
        purpose in the first place.
      </p>
      <p>
        Since 2016 our team has spent most of our time in Shenzhen, China, the
        “Bay Area for Hardware”, where components of all kinds were much more
        accessible than anywhere else on earth. We raised a few million dollars
        and dove into our work. That was the time when we went into stealth mode
        and stopped doing PR. Because I knew in order to make it really work,
        there were still a ton of engineering issues to be solved. Instead of
        exaggerating and telling everybody about how amazing the product is
        without letting people see it or try it anywhere, I preferred to get
        work done first to “show and tell”. I always feel overselling is a
        dangerous strategy that can be counterproductive.
      </p>
    </div>
    <div class="video__3mb7h">
      <div class="video__bVhmv">
        <ul
          class="videoThumbnail__17_-H shadow__1pyg5"
          style="position: relative;"
        >
          <this-video
            :item="{
              cover: '/img/pro-9.png',
              src:
                'https://oss-main.dextarobotics.com/videos/experience/2-dexmo-test.mp4',
            }"
          />
        </ul>
      </div>
    </div>
    <div class="video__3mb7h">
      <div class="video__bVhmv">
        <ul
          class="videoThumbnail__17_-H shadow__1pyg5"
          style="position: relative;"
        >
          <this-video
            :item="{
              cover: '/img/pro-10.png',
              src:
                'https://oss-main.dextarobotics.com/videos/experience/3-early-test.mp4',
            }"
          />
        </ul>
      </div>
    </div>
    <div class="video__3mb7h">
      <div class="video__bVhmv">
        <ul
          class="videoThumbnail__17_-H shadow__1pyg5"
          style="position: relative;"
        >
          <this-video
            :item="{
              cover: '/img/pro-11.png',
              src:
                'https://oss-main.dextarobotics.com/videos/experience/4-2017.mp4',
            }"
          />
        </ul>
      </div>
    </div>
    <div>
      <p>
        We had industrial professionals tested out first batches of engineering
        prototypes to give their honest opinions. From the feedback we gathered,
        people generally liked the product and the experience and showed great
        appreciation to our engineering efforts. It was very difficult to define
        what form should it take since it has never been done before. But being
        told that our technology was superior definitely reassured us that we
        were on the right track.
      </p>
      <p>
        It was good, but there was still much to improve. Since then we started
        to optimize every little thing to make Dexmo more usable. Ergonomic,
        weight, size, structure integrity, motor controls, communication,
        fabrication methods, interaction handling engine, SDK for developers,
        sample programs… There were more than 16 different technical stacks
        involved and required close cooperation between many software, control,
        electrical and mechanical engineers. It was really complicated, we had
        so much fun.
      </p>
      <p>
        The software was a critical and challenging part of Dexmo’s development.
        For people to actually use it easily, it cannot just be a hardware. It
        needs to be a system. This really was a paradox when we just got
        started. It was impossible to build software for something that didn’t
        exist yet. But after we had a hardware and started the software work we
        would soon realize some changes were better made in the hardware, which
        would also affect the current software design. Every time we updated the
        system, it was at least a 2-month job.
      </p>
      <p>
        Having an SDK and having a good SDK is very different. In 2017 we
        shipped some early testing units. We had a working SDK that had already
        been successfully used by many people. However our customers still had
        so many questions about it that we literally had hundreds of emails
        coming back and forth. We underestimated how a new hardware system can
        be difficult for software developers.
      </p>
    </div>
    <img src="/img/pro-12.png" />
    <div>
      <p>
        Building a good hand-object interface in VR is hard because the hardware
        is new. So we predefined a lot of interfaces and packed them into
        examples to help developers get started. To make the SDK easy to use, it
        also has to be really well documented, which too requires extra effort.
        In the following year, we further enriched our SDK with step by step
        instructions that even people with no software development experience
        should be able to use it just by following the steps. (Fun fact: One of
        our SDK testing engineers actually came from a mechanical engineering
        background with zero coding ability when he joined us. Now he can use
        the SDK system quite easily.)
      </p>
      <p>
        The most challenging part was understanding manufacturing. Expectedly,
        mass producing products of this complexity and novelty was
        extraordinarily difficult. Unlike headset manufacturing that could
        reference on smartphone assembly lines as their hardware composition
        were very similar, there was no production line reference for us. Nobody
        even knew what “force feedback gloves” were. Therefore, we had to go
        even deeper.
      </p>
    </div>
    <img src="/img/pro-13.png" />
    <div>
      <p>
        Take our force feedback unit as an example. In the past years we went
        through many dozens of iterations. The servo motor we started with (the
        square box on the left) was originally designed for model cars and
        planes, hence the low space utilization and rather low structural
        integrity for torque conduction. The unit was very wide, which made it
        very difficult to put five of them on the back of a hand. We could
        compromise and move the motor box up to the wrist, but I knew that’s not
        the way to go. We needed to make the system as compact as possible at
        all cost. So we decided to design our own servo systems, starting by
        understanding what the essential components of a servo were and the
        fabrication process for each part.
      </p>
      <p>
        The shell of the servo was made of CNC machined aluminum, meaning we
        could reshape its geometry at our will. By moving the torque output arm
        in the middle, we managed to make it thinner and more structurally
        stable at the same time. The gears were made from gear hobbing machines
        that worked with quite a wide range of materials, indicating the
        transmission design was tweakable as well. We experimented with
        different materials to get the best performance-weight ratio out of the
        gears. By swapping in chip-sets with higher computing power and putting
        in more sensors we had achieved much more refined motor controls
        on-board. By pushing ourselves into these details, we started to feel
        anything is possible. So we took it a few further steps further and
        completely re-built the force feedback unit. The end-product was
        elegantly built specifically for the force feedback glove and hence how
        we made it compact.
      </p>
      <p>
        This example is merely the tip of the iceberg. Every part of the system
        has gone through soul-crushing analysis and improvements like this. I
        personally lived at the factory for eight months to understand every
        detail of how it could be made possible. We had to constantly balance
        the engineering needs and suppliers’ offering to make our production
        process smooth and reliable. After all, what’s the point of developing a
        technology that can’t be built and shared?
      </p>
    </div>
    <img src="/img/pro-14.png" />
    <div>
      <p>
        For people who are not familiar with manufacturing processes, the
        differences between a prototype and a final product may seem subtle. In
        reality,while sharing 90% similar physical appearances, the effort that
        goes underneath can be hundreds of times different.
      </p>
      <p>Here are some brief steps of hardware making:</p>
      <p>
        ideas &gt; idea validation &gt; working prototype &gt; industrial design
        &gt; making them work cohesively together &gt; improvements &gt;
        engineering validation &gt; more improvements &gt; design validation
        &gt; final production-ready design &gt; pre-production preparation &gt;
        parts sourcing &gt; vendor communication &gt; parts quality control &gt;
        assembly procedure design &gt; parts assembly &gt; quality control
        testing &gt; final product assembly &gt; final quality control testing
        &gt; final shipping-ready product &gt; packaging &gt; shipping
      </p>
      <p>
        Inevitably some of the processes can circulate for times beyond one’s
        imagination due to random problems of all kinds, making it even harder
        to proceed. For example, during our last batch of the manufacturing
        cycle, where we thought we already knew every single detail, I was
        informed by one of our vendors that some small machined parts on our
        force feedback units were accidentally left unattended in the anodic
        oxidation pool and dissolved, thus delaying the whole assembly procedure
        for another month. I laughed so hard and so bitterly when I heard the
        news.
      </p>
      <p>
        Some of you would say: why can’t you find more reliable vendors like
        FoxConn? Good question. Innovation typically means initial smaller
        shipping quantity, and factories rely on large quantity to profit. This
        conflict means they would not want to work with small company like ours
        due to the economical inefficiency. We had to have sales first before we
        could mass manufacture. Funny, right?
      </p>
      <p>
        It took us years to get something from a working prototype to something
        “Shipping ready”. And I really want to emphasize that this is not
        trivial work. It’s not “Design-ready” or “Manufacturing-ready”. It’s now
        “Shipping-ready”, meaning we now hold the power to make tens of
        thousands of this product, if needed.
      </p>
      <p>
        I sigh every time when I see people getting over-exited when they see a
        lab prototype that’s barely working and then expect the team to ship in
        months; Or comparing us with some company that was founded a month ago
        claiming they built something that worked just like ours. Cute. But
        comparing prototypes to finished products isn’t fair. People who have
        experience with any Kickstarter hardware project would know what I am
        talking about, where promised “delivery in four month” effectively means
        two years and more, which usually ends up with the disappearance of the
        team and countless angry backers.
      </p>
      <p>After all the hard work, this is what we have achieved so far:</p>
    </div>
    <img src="/img/pro-15.gif" />
    <div>
      <p>
        For the first time in the history of commercial force feedback gloves,
        we managed to put 5 force feedback units, 11 motion capturing sensors, a
        rechargeable battery and an entire control system into the form of a
        glove that weights less than 300 grams, allowing users to use them with
        both of their hands wirelessly with full dexterity of their hands. Dexmo
        is made tether-free, light and dexterous enough so the users could
        ignore its existence in long-time usage, thus the pleasure of users’
        immersive experiences won’t be interrupted.
      </p>
    </div>
    <img src="/img/pro-16.gif" />
    <div>
      <p>
        It captures full hand motion of 11 degrees-of-freedom, with a delicate 3
        DoF thumb tracking and 2 DoF on each of the rest four fingers, including
        the splitting and flexing of all fingers. The miniaturized force
        feedback units can apply up to about 10N of force to the users’
        fingertip. Its superior thumb tracking helps with the accurate
        regeneration of hand models, which contributes greatly to a good force
        feedback experience. It allows users to feel the size, shape and
        stiffness of the virtual object. Thus it greatly improves immersion and
        enables much more intuitive interaction.
      </p>
    </div>
    <img src="/img/pro-17.gif" />
    <div>
      <p>
        We are now capable of mass manufacturing the product by following the
        DFM (Design for Manufacture) principles and our strict quality control
        standards. Our SDK had been tested by many early customers and has been
        improved to a stage that is truly “easy-to-use”. Even people with little
        background knowledge about VR should be able to use them by following
        the step by step instructions. Ergonomics is another very important
        feature we focused on. We developed sets of special fixation mechanisms
        that allow the wearing of Dexmo to be both easy and hygienic.
      </p>
      <p>
        With these functionalities, for the first time users can not only see
        their hands in VR, but also actually feel what they are grasping with
        unpresented realism. Before force feedback is introduced in VR, the
        immersion can be easily interrupted: Whenever you try to pick up
        something and you see your fingers overlapping with the object, you know
        this is not real; When you have to pose your hand in a certain gesture
        just to pretend you are holding something, you know it’s not real; No
        matter how amazing the animation or sound effect is, you just know.
      </p>
      <p>
        It is definitely not to say our system is perfect and recreates all
        sensations that a human hand perceives. It does not simulate weight yet.
        Physics tells us you would need a whole grounded robotic arm to produce
        that counter force for gravity simulation; It does not simulate
        temperature yet. All kinds of semiconductors need to be closely packed
        throughout the system for that; It does not provide refined tactile yet.
        Other actuation methods need to be further explored…etc.
      </p>
    </div>
    <img src="/img/pro-18.png" />
    <div>
      <p>
        With all that being said, force feedback is undoubtedly another critical
        dimension of sensation added to the virtual world. One that has been
        long craved for by many people, one that pushes the boundary of VR HCI a
        bit further. Many of our software interactions are developed based on
        this new technology, such as finger-flicking, pinching, wheel-scrolling,
        button-pressing, lever-pulling, knob-turning and much more. All created
        and tested within our SDK, just to make it a bit easier for the
        developers. When combined with the right graphics and animation, many
        applications that were otherwise impossible are made possible.
      </p>
    </div>
    <img src="/img/pro-19.png" />
    <div>
      <p>
        I get asked by the VCs a lot: Who are your customers? And this really is
        a very difficult question to answer. Because soon from now, that could
        be everybody. I always feel that the ultimate minimal requirement of VR
        is one headset plus a pair of force feedback gloves. Realistically
        speaking, for now we are working with research institutes, leading
        industrial specialists and universities, which covers all kind of
        projects such as: flight simulation, aerospace simulation, astronaut
        training, laptop assembly line training, safety training, car assembly
        training, education, medical procedure training, rehabilitation, large
        space gaming, exhibitions, tele-operation…..etc. So basically
        everything. Force feedback gloves really add another level of immersion
        to any existing scenario and makes it better.
      </p>
      <p>To give a few detailed examples:</p>
      <p>
        A client of ours is experimenting with factory working training at their
        laptop assembly lines. Many production lines suffer from the high
        dropout rate and worker shortage in China, which means a lot of the
        skilled works must spend a large amount of the time to teach newbies how
        to work properly, lowering their output and the overall output of the
        factory. The first test was made with Oculus. The new workers were asked
        to pre-assemble computers in VR using Oculus Touch. And while they found
        it more interesting, the dexterity of finger movements could not be
        reflected in the training software, making the outcome far less
        efficient than expected. But when they started to use Dexmo for
        development, the workers might pick up the training course way faster
        and more acculturate because it’s more intuitive.
      </p>
      <p>
        Another good example is flight training. Among our many training
        customers, flight simulation has been quite popular. They generally need
        a means for the user to flip switches and push buttons in VR which the
        motion controllers just can’t do. Leap motion is comparably unstable in
        such cases. Again, this is made possible with our force feedback
        technology. Imagine in the future all pilots need to pass a VR flight
        simulation test instead of reading through manual from paper and
        guessing for which button to press.
      </p>
      <p>
        In nuclear power stations, the operators can be pre-trained in VR to
        face rare emergencies like potential nuclear leakage. They could learn
        which level to pull, which knob to turn first and be guided through the
        could-be catastrophe all in a virtual environment; In space programs,
        instead of building facilities that clones of the space station on the
        ground for the astronauts to familiarize with the space mission, we
        could have built it in VR. And they would be able to perform a similar
        level of tasks within.
      </p>
      <p>
        Dexmo surely has the greatest potential in gaming and social VR. In
        RecRoom you can actually grab the flag, toss the basketball, pull the
        trigger on the crossbow…etc.. Image everything becomes so seamless that
        you need not to learn anything, or to remember which button does what,
        or what combo key is for the manual… you can do whatever you do just
        like in real life. If you want to pick up an apple, go for it; If you
        want to reload your gun, just insert the magazine and pull the slide; if
        you want to open a box, turn on a TV, drink a bottle of
        water…Instructions are unneeded. Everything is intuitive. Dexmo could
        transform way more immersive experiences than what I just listed.
      </p>
      <p>
        I image there are many questions that you want to ask as well. I will
        briefly answer some of the common ones here just to get started.
      </p>
      <p>Does it support Oculus/Vive/PSVR/WMR/Hololens?</p>
      <p>
        Yes. It works with most room-scale VR systems. Dexmo does not yet have a
        spatial tracking solution for itself yet because we want to keep it
        open. It technically supports any VR system with 6DoF motion
        controllers, all it needs is a pair of coordinates, orientation and an
        initial position offset calibration. Hololens is slightly different
        because it doesn’t come with its own 6DoF controllers and it is an
        all-in-one system that doesn’t even have a USB hub, but if we can pass
        some other tracking data (Say, Optitrack) into the system, it could
        still work.
      </p>
      <p>How much would it cost?</p>
      <p>
        In short: rather expensive. While I personally want everybody to get
        hold of them as soon as possible, the current versions are actually
        targeted for business. Don’t get upset just yet. Hear me out, and I
        assure you the reasoning will make sense.
      </p>
      <p>What are your plans as a company?</p>
      <p>
        In 2014 we called off our Kickstarter Campaign because we realized Dexmo
        was not consumer ready. What consumers want are products that are
        inexpensive, well supported, come with lots of games and work well right
        out of the box. The functionalities are just one out of the many
        requirements general consumers want. Price factor aside, we are in short
        of support. Hardware wise, in order to make it really seamless, we need
        SDK-level integration from Headset companies like Facebook, Microsoft,
        Sony and HTC; Software-wise, we would need support from the developers
        communities and have them build the games first before you want to buy
        them. Both of them require market proof that force feedback gloves are
        the right way to go.
      </p>
      <p>
        And we plan on achieving that by starting to work with business
        partners. By providing the early adaptors with the most cutting-edge
        technological advancements, they could start developing compelling VR
        experiences that benefit and profit their businesses. They are willing
        to invest in R&D, they could work with the products and provide valuable
        feedback, and we could build more amazing VR experience together to
        showcase how capable a good, complete VR system can be.
      </p>
      <p>
        Eventually, we hope force feedback gloves, along with a headset, can
        become the default set up of a minimal VR system, and by then it shall
        be something everybody needs.
      </p>
      <p>
        In order to keep the company running and keep pushing the boundaries of
        VR HCI, capital is needed. And a lot of the money we raised went
        straight to support our R&D. We need to be a profitable company first in
        order to be able to bring the force feedback glove closer to the general
        consumers. Selling products that are not yet satisfactory to general
        consumers, with a price point that can’t cover the R&D cost won’t help
        us move towards that goal. We hope more people get to know about Dexmo.
        Share it, talk about it, it helps. When we can ship tens of thousands of
        Dexmo annually, with the help of the economy of scale and the business
        proof we lay down, it will not be far from being consumer-ready. That
        vague timeline being said, we will try as hard we can &nbsp;:)
      </p>
      <p>
        Okay, we are close to the end here. I’d like to thank you all for
        reading this long article. And please allow me to say that Dexmo marks a
        critical step towards a truly immersive VR world. It has accomplished
        something that’s both hard and important. We’re aware that the system is
        still far from perfect. It is limited by the amount of money we have
        raised thus far, the timeline for each business experiment to be carried
        out, the R&D hours to be put in…But we are getting there. We are working
        hard, we know what we are doing, and it will get even better. That is
        the message we want to send.
      </p>
    </div>
  </div>
</template>

<script>
import thisVideo from '@/components/theVideo'
export default {
  components: { thisVideo },
  methods: {},
}
</script>

<style></style>
