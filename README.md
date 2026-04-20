📝 Task Management App (Next.js 14)
এটি একটি আধুনিক টাস্ক ম্যানেজমেন্ট অ্যাপ্লিকেশন যা Next.js 14 App Router, HeroUI (পূর্বে NextUI), এবং Server Actions ব্যবহার করে তৈরি করা হয়েছে।

📁 প্রজেক্ট স্ট্রাকচার ও ফাইল পরিচিতি
১. src/lib/page.js (Data Handling)
এই ফাইলটি ডেটাবেস বা JSON ফাইলের সাথে যোগাযোগ করার জন্য ব্যবহৃত হয়।

GetTask(): এটি data.json থেকে সব টাস্ক পড়ে নিয়ে আসে।

postTask(newTask): এটি নতুন একটি টাস্ক নিয়ে সেটিকে লিস্টে যুক্ত করে।

JavaScript
// কেন ব্যবহার করা হয়েছে: ডেটা রিড এবং রাইট করার লজিক এক জায়গায় রাখার জন্য।
export const GetTask = () => {
    return tasks; // JSON থেকে ডেটা রিটার্ন করে
};

export const postTask = (newTask) => {
    tasks.push(newTask); // নতুন ডেটা পুশ করে
};
২. src/lib/actions.js (Server Actions)
Next.js-এর বিশেষ ফিচার Server Actions এখানে ব্যবহার করা হয়েছে। এর মাধ্যমে কোনো API রুট ছাড়াই সার্ভারে ডেটা পাঠানো যায়।

createData: ফর্ম থেকে ডেটা নিয়ে টাস্ক তৈরি করে এবং পেজটি রিফ্রেশ (revalidate) করে।

extraTask: এটি টাস্ক তৈরি করার পর ইউজারকে অটোমেটিক /task পেজে পাঠিয়ে দেয় (Redirect)।

JavaScript
// কেন ব্যবহার করা হয়েছে: ফর্ম সাবমিশন সার্ভার সাইডে হ্যান্ডেল করার জন্য।
'use server'
export const createData = async (formData) => {
    const newTask = Object.fromEntries(formData.entries());
    await postTask(newTask);
    revalidatePath('/task'); // নতুন ডেটা দেখানোর জন্য পেজ আপডেট করে
}
৩. src/app/task/page.jsx (Task List Page)
এটি আপনার অ্যাপের মেইন পেজ যেখানে সব টাস্ক লিস্ট আকারে দেখা যায়।

কাজ: এটি সার্ভার কম্পোনেন্ট হিসেবে GetTask() কল করে এবং সব টাস্ক কার্ড আকারে দেখায়। এখানে ModalTask কম্পোনেন্টটিও রাখা হয়েছে দ্রুত টাস্ক এড করার জন্য।

৪. src/app/task/new/page.jsx (New Task Form)
ইউজার যখন বড় কোনো ফর্মে আলাদা পেজে গিয়ে টাস্ক এড করতে চায়, তখন এটি ব্যবহৃত হয়।

কাজ: এখানে HeroUI এর Input, Select, এবং Button ব্যবহার করা হয়েছে। এতে ডেসক্রিপশন ফিল্ডে মিনিমাম ৫ অক্ষরের একটি ভ্যালিডেশন দেওয়া আছে।

৫. src/components/taskCard.jsx (UI Component)
প্রতিটি টাস্ককে সুন্দরভাবে কার্ড আকারে দেখানোর জন্য এই কম্পোনেন্টটি তৈরি করা হয়েছে।

কেন ব্যবহার করা হয়েছে: কোড বারবার না লিখে (Reusability) একটি ডিজাইনকে বারবার ব্যবহার করার জন্য।

JavaScript
// HeroUI Card ব্যবহার করে তৈরি
<Card>
  <CardHeader>{task.title}</CardHeader>
  <CardBody>{task.description}</CardBody>
</Card>
৬. src/providers/NextThemeProvider.jsx (Theme Management)
আপনার অ্যাপে Dark Mode এবং Light Mode সাপোর্ট করার জন্য এটি ব্যবহার করা হয়েছে।

কাজ: এটি next-themes লাইব্রেরি ব্যবহার করে পুরো অ্যাপকে র‍্যাপ (Wrap) করে রাখে যাতে থিম চেঞ্জ করলে সব কম্পোনেন্টে তা কাজ করে।

🛠 প্রযুক্তি যা ব্যবহার করা হয়েছে (Tech Stack)
Next.js 14 (App Router): লেটেস্ট ফ্রেমওয়ার্ক হিসেবে দ্রুত পারফরম্যান্সের জন্য।

HeroUI: সুন্দর এবং রেডিমেড UI কম্পোনেন্ট ব্যবহার করার জন্য।

Tailwind CSS: কাস্টম ডিজাইনের জন্য।

Server Actions: ব্যাকএন্ড লজিক সহজে হ্যান্ডেল করার জন্য।

🚀 কিভাবে চালাবেন?
১. প্রথমে ডিপেন্ডেন্সি ইনস্টল করুন:

Bash
npm install
২. ডেভেলপমেন্ট সার্ভার চালু করুন:

Bash
npm run dev
৩. ব্রাউজারে চেক করুন: http://localhost:3000/task

⚠️ নোট (Future Improvements)
বর্তমানে ডেটা শুধুমাত্র রানটাইমে থাকে (JSON file)। পার্মানেন্ট সেভ করার জন্য MongoDB বা PostgreSQL যুক্ত করা যেতে পারে।

টাস্ক ডিলিট এবং এডিট অপশন এখনো যুক্ত করা হয়নি।