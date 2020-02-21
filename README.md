# Webdriver.io Issue Repo cases

# Browser does not close when killing Jest test that starts a browser

 1. https://github.com/webdriverio/webdriverio/issues/5052
 1. Run `yarn` or `npm install`
 1. `yarn test` or `npm test`.
 1. Control-c to kill process.
 1. Jest will exit but the browser will stay open.

# Devtools: infinite recursive loop in devtools driver

 1. https://github.com/webdriverio/webdriverio/issues/5048
 1. Run `yarn` or `npm install`
 1. `yarn start` or `npm start`.
 1. Control-c to kill process.
 1. Wait a few minutes...
 1. On the console you'll get a stack dump from the browser process that was still running.

You can also use the chrome inspector at `chrome://inspect` to watch this happen.

```
<--- Last few GCs --->

[3340:0x102802000]    60900 ms: Scavenge 1393.4 (1422.7) -> 1392.6 (1423.2) MB, 3.5 / 0.0 ms  (average mu = 0.207, current mu = 0.162) allocation failure
[3340:0x102802000]    60907 ms: Scavenge 1393.5 (1423.2) -> 1392.7 (1424.2) MB, 3.3 / 0.0 ms  (average mu = 0.207, current mu = 0.162) allocation failure
[3340:0x102802000]    60914 ms: Scavenge 1393.6 (1424.2) -> 1392.8 (1424.7) MB, 3.0 / 0.0 ms  (average mu = 0.207, current mu = 0.162) allocation failure


<--- JS stacktrace --->

==== JS stack trace =========================================

    0: ExitFrame [pc: 0x23aa1125be3d]
    1: StubFrame [pc: 0x23aa11918e38]
Security context: 0x38ada011e6e9 <JSObject>
    2: /* anonymous */(aka /* anonymous */) [0x38ad17d162a9] [/Users/dgreene/projects/prs/webdriverio-issue-repo/node_modules/puppeteer-core/lib/helper.js:113] [bytecode=0x38ada1004991 offset=7](this=0x38ad6b5026f1 <undefined>,e=0x38ad17d160e1 <Error map = 0x38ad02520ce1>)
    3: StubFrame [pc: 0x23aa11241811]
    4: Stu...

FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory
 1: 0x10003cf99 node::Abort() [/Users/dgreene/.nvm/versions/node/v10.16.0/bin/node]
 2: 0x10003d1a3 node::OnFatalError(char const*, char const*) [/Users/dgreene/.nvm/versions/node/v10.16.0/bin/node]
 3: 0x1001b7835 v8::internal::V8::FatalProcessOutOfMemory(v8::internal::Isolate*, char const*, bool) [/Users/dgreene/.nvm/versions/node/v10.16.0/bin/node]
 4: 0x100585682 v8::internal::Heap::FatalProcessOutOfMemory(char const*) [/Users/dgreene/.nvm/versions/node/v10.16.0/bin/node]
 5: 0x100588155 v8::internal::Heap::CheckIneffectiveMarkCompact(unsigned long, double) [/Users/dgreene/.nvm/versions/node/v10.16.0/bin/node]
 6: 0x100583fff v8::internal::Heap::PerformGarbageCollection(v8::internal::GarbageCollector, v8::GCCallbackFlags) [/Users/dgreene/.nvm/versions/node/v10.16.0/bin/node]
 7: 0x1005821d4 v8::internal::Heap::CollectGarbage(v8::internal::AllocationSpace, v8::internal::GarbageCollectionReason, v8::GCCallbackFlags) [/Users/dgreene/.nvm/versions/node/v10.16.0/bin/node]
 8: 0x10058ea6c v8::internal::Heap::AllocateRawWithLigthRetry(int, v8::internal::AllocationSpace, v8::internal::AllocationAlignment) [/Users/dgreene/.nvm/versions/node/v10.16.0/bin/node]
 9: 0x10058eaef v8::internal::Heap::AllocateRawWithRetryOrFail(int, v8::internal::AllocationSpace, v8::internal::AllocationAlignment) [/Users/dgreene/.nvm/versions/node/v10.16.0/bin/node]
10: 0x100560435 v8::internal::Factory::NewRawOneByteString(int, v8::internal::PretenureFlag) [/Users/dgreene/.nvm/versions/node/v10.16.0/bin/node]
11: 0x100878a04 v8::internal::IncrementalStringBuilder::Extend() [/Users/dgreene/.nvm/versions/node/v10.16.0/bin/node]
12: 0x100878b32 v8::internal::IncrementalStringBuilder::AppendString(v8::internal::Handle<v8::internal::String>) [/Users/dgreene/.nvm/versions/node/v10.16.0/bin/node]
13: 0x100680000 v8::internal::(anonymous namespace)::AppendFileLocation(v8::internal::Isolate*, v8::internal::StackFrameBase*, v8::internal::IncrementalStringBuilder*) [/Users/dgreene/.nvm/versions/node/v10.16.0/bin/node]
14: 0x10067fc14 v8::internal::JSStackFrame::ToString() [/Users/dgreene/.nvm/versions/node/v10.16.0/bin/node]
15: 0x100681ea4 v8::internal::ErrorUtils::FormatStackTrace(v8::internal::Isolate*, v8::internal::Handle<v8::internal::JSObject>, v8::internal::Handle<v8::internal::Object>) [/Users/dgreene/.nvm/versions/node/v10.16.0/bin/node]
16: 0x1001b26f6 v8::internal::Accessors::ErrorStackGetter(v8::Local<v8::Name>, v8::PropertyCallbackInfo<v8::Value> const&) [/Users/dgreene/.nvm/versions/node/v10.16.0/bin/node]
17: 0x10060a511 v8::internal::PropertyCallbackArguments::BasicCallNamedGetterCallback(void (*)(v8::Local<v8::Name>, v8::PropertyCallbackInfo<v8::Value> const&), v8::internal::Handle<v8::internal::Name>, v8::internal::Handle<v8::internal::Object>) [/Users/dgreene/.nvm/versions/node/v10.16.0/bin/node]
18: 0x10068b507 v8::internal::Object::GetPropertyWithAccessor(v8::internal::LookupIterator*) [/Users/dgreene/.nvm/versions/node/v10.16.0/bin/node]
19: 0x1008020be v8::internal::Runtime::GetObjectProperty(v8::internal::Isolate*, v8::internal::Handle<v8::internal::Object>, v8::internal::Handle<v8::internal::Object>, bool*) [/Users/dgreene/.nvm/versions/node/v10.16.0/bin/node]
20: 0x100805c4c v8::internal::Runtime_GetProperty(int, v8::internal::Object**, v8::internal::Isolate*) [/Users/dgreene/.nvm/versions/node/v10.16.0/bin/node]
21: 0x23aa1125be3d
```

