var quotes =[
    "<p style='display: block;'> Be yourself; everyone else is already taken.</p>  <p class='mx-auto'> --Oscar Wilde</p>",
"<p style='display: block;'> Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. </p><p class='mx-auto'>  --Albert Einstein </p>",
"<p style='display: block;'> So many books, so little time.</p>    <p class='mx-auto'>--Frank Zappa</p>",
"<p style='display: block;'> It is better to be hated for what you are than to be loved for what you are not.</p>    <p class='mx-auto'>--Andre Gide</p>",
"<p style='display: block;'> To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.</p>     <p class='mx-auto'>--Ralph Waldo Emerson</p>",
"<p style='display: block;'> I am so clever that sometimes I don't understand a single word of what I am saying.</p>    <p class='mx-auto'>--Oscar Wilde</p>",
"<p style='display: block;'> A room without books is like a body without a soul.</p> <p class='mx-auto'>--Marcus Tullius Cicero</p>",
"<p style='display: block;'> Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.</p>   </p> <p class='mx-auto'> --Bernard M. Baruch</p>",
"<p style='display: block;'> You know you're in love when you can't fall asleep because reality is finally better than your dreams</p>    </p> <p class='mx-auto'>--Dr. Seuss</p>",
"<p style='display: block;'> You only live once, but if you do it right, once is enough.</p>    </p> <p class='mx-auto'>--Mae West</p>",
`<p style='display: block;'> I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst,
 then you sure as hell don't deserve me at mybest.</p>   </p> <p class='mx-auto'>--Marilyn Monroe</p>`,
"<p style='display: block;'> Be the change that you wish to see in the world.</p>  </p> <p class='mx-auto'> --Mahatma Gandhi</p>",
"<p style='display: block;'> In three words I can sum up everything I've learned about life: it goes on.</p>   </p> <p class='mx-auto'>--Robert Frost</p>",
"<p style='display: block;'> If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.</p>   </p> <p class='mx-auto'>--J.K. Rowling</p>",
"<p style='display: block;'> If you tell the truth, you don't have to remember anything.</p  </p><p class='mx-auto'>--Mark Twain</p>",
"<p style='display: block;'> I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.</p>   </p> <p class='mx-auto'> --Maya Angelou</p>",
"<p style='display: block;'> A friend is someone who knows all about you and still loves you.</p>    </p> <p class='mx-auto'>--Elbert Hubbard</p>",

]
function generate() {
    var quote = quotes[Math.floor(Math.random()*quotes.length)]
    document.getElementById("demo").innerHTML = quote
}