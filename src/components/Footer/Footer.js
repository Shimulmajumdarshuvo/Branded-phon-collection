import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <div className='footer'>
            <h2>How react works?</h2>
            <p>React হলো একটি  javascript library. কোন ফ্রেমওয়ার্ক নয়
                ।যা ঘোষণামূলক  কিছু কোড ব্যবহার করে অনুমানযোগ্য ও efficient  ভাবে user interface
                তৈরি করে।React declarative কোডে কাজ করে।React ঝামেলাহীন ভাবে ইন্টারেক্টিভ ui তৈরি করে।
                আমাদের যেকোন অ্যাপ্লিকেশনের প্রতিটি  টেস্টের জন্য সহজ ডিজাইন করুন, এবং যখনই আপনার ডাটা
                পরিবর্তন হবে Reactসাথে সঠিক কম্পোনেন্টটি আপডেট এবং রেন্ডার করবে।
                Declarative রিভিউ আপনার কোড সহজবোধ্য এবং সহজে ডিবাগ যোগ্য  করে তোলে।
                React objects গুলি read করে এবং ভার্চুয়াল DOM এ এইচটিএমএল উপাদান তৈরি করতে
                ব্যবহার করে, এরপরে DOM এর সাথে synced হয়ে যায়। তাই আমাদের ভার্চুয়াল  DOM  tree
                of objects  এ real DOM এ tree of objects থাকবে। যখন আমরা একটি react এর
                ডেটার পরিবর্তন করি তখন React automatically DOM এর উপাদান  updates করে।
            </p>

            <h2>Difference Between State vs Props :</h2>
            <h5>State :</h5>
            <p>
                1.State are mutable. <br />
                2.State is set and update by the object. <br />
                3.State হল কম্পোনেন্টের স্থায়ী অবস্থা যা কম্পোনেন্ট এর বাইরে Access ও Change  করা
                যায় না| <br />
                4.State একটি ফাংশন এর স্থায়ী ভেরিয়েবলের সমতুল্য।


            </p>
            <h5>Props :</h5>
            <p>
                1.Props are immutable.   <br />
                2.You can pass properties from parent components. <br />
                3.like Function Parameters. <br />
                4.Props-function component.
                5.Props এর value কখনো পরিবর্তন করা যায় না
            </p>


            <h2>How use state works</h2>
            <p>

            </p>

        </div>
    );
};

export default Footer;