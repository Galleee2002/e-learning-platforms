Write-Host "Creando estructura de carpetas para plataforma educativa..." -ForegroundColor Yellow

New-Item -ItemType Directory -Path "src\app" -Force
New-Item -ItemType Directory -Path "src\components" -Force
New-Item -ItemType Directory -Path "src\hooks" -Force
New-Item -ItemType Directory -Path "src\lib" -Force
New-Item -ItemType Directory -Path "src\store" -Force
New-Item -ItemType Directory -Path "src\types" -Force
New-Item -ItemType Directory -Path "src\styles" -Force
New-Item -ItemType Directory -Path "public\images" -Force
New-Item -ItemType Directory -Path "public\icons" -Force
New-Item -ItemType Directory -Path "public\videos" -Force

New-Item -ItemType Directory -Path "src\app\(auth)\login" -Force
New-Item -ItemType Directory -Path "src\app\(auth)\register" -Force

New-Item -ItemType Directory -Path "src\app\(dashboard)\admin\courses" -Force
New-Item -ItemType Directory -Path "src\app\(dashboard)\admin\users" -Force
New-Item -ItemType Directory -Path "src\app\(dashboard)\student\courses\[courseId]" -Force
New-Item -ItemType Directory -Path "src\app\(dashboard)\student\progress" -Force
New-Item -ItemType Directory -Path "src\app\(dashboard)\teacher\courses\create" -Force
New-Item -ItemType Directory -Path "src\app\(dashboard)\teacher\courses\[courseId]\edit" -Force

New-Item -ItemType Directory -Path "src\app\api\auth" -Force
New-Item -ItemType Directory -Path "src\app\api\users" -Force
New-Item -ItemType Directory -Path "src\app\api\courses\[courseId]" -Force

New-Item -ItemType Directory -Path "src\components\ui" -Force
New-Item -ItemType Directory -Path "src\components\auth" -Force
New-Item -ItemType Directory -Path "src\components\course" -Force
New-Item -ItemType Directory -Path "src\components\dashboard" -Force
New-Item -ItemType Directory -Path "src\components\common" -Force

New-Item -ItemType File -Path "src\app\page.tsx" -Force
New-Item -ItemType File -Path "src\app\layout.tsx" -Force
New-Item -ItemType File -Path "src\app\globals.css" -Force

New-Item -ItemType File -Path "src\app\(auth)\login\page.tsx" -Force
New-Item -ItemType File -Path "src\app\(auth)\register\page.tsx" -Force

New-Item -ItemType File -Path "src\app\(dashboard)\admin\page.tsx" -Force
New-Item -ItemType File -Path "src\app\(dashboard)\admin\courses\page.tsx" -Force
New-Item -ItemType File -Path "src\app\(dashboard)\admin\users\page.tsx" -Force

New-Item -ItemType File -Path "src\app\(dashboard)\student\page.tsx" -Force
New-Item -ItemType File -Path "src\app\(dashboard)\student\courses\page.tsx" -Force
New-Item -ItemType File -Path "src\app\(dashboard)\student\courses\[courseId]\page.tsx" -Force
New-Item -ItemType File -Path "src\app\(dashboard)\student\progress\page.tsx" -Force

New-Item -ItemType File -Path "src\app\(dashboard)\teacher\page.tsx" -Force
New-Item -ItemType File -Path "src\app\(dashboard)\teacher\courses\page.tsx" -Force
New-Item -ItemType File -Path "src\app\(dashboard)\teacher\courses\create\page.tsx" -Force
New-Item -ItemType File -Path "src\app\(dashboard)\teacher\courses\[courseId]\page.tsx" -Force
New-Item -ItemType File -Path "src\app\(dashboard)\teacher\courses\[courseId]\edit\page.tsx" -Force

New-Item -ItemType File -Path "src\app\api\auth\route.ts" -Force
New-Item -ItemType File -Path "src\app\api\users\route.ts" -Force
New-Item -ItemType File -Path "src\app\api\courses\route.ts" -Force
New-Item -ItemType File -Path "src\app\api\courses\[courseId]\route.ts" -Force

New-Item -ItemType File -Path "src\components\ui\button.tsx" -Force
New-Item -ItemType File -Path "src\components\ui\card.tsx" -Force
New-Item -ItemType File -Path "src\components\ui\input.tsx" -Force
New-Item -ItemType File -Path "src\components\ui\modal.tsx" -Force
New-Item -ItemType File -Path "src\components\ui\index.ts" -Force

New-Item -ItemType File -Path "src\components\auth\LoginForm.tsx" -Force
New-Item -ItemType File -Path "src\components\auth\RegisterForm.tsx" -Force
New-Item -ItemType File -Path "src\components\auth\index.ts" -Force

New-Item -ItemType File -Path "src\components\course\CourseCard.tsx" -Force
New-Item -ItemType File -Path "src\components\course\CourseList.tsx" -Force
New-Item -ItemType File -Path "src\components\course\LessonPlayer.tsx" -Force
New-Item -ItemType File -Path "src\components\course\index.ts" -Force

New-Item -ItemType File -Path "src\components\dashboard\Sidebar.tsx" -Force
New-Item -ItemType File -Path "src\components\dashboard\Header.tsx" -Force
New-Item -ItemType File -Path "src\components\dashboard\Stats.tsx" -Force
New-Item -ItemType File -Path "src\components\dashboard\index.ts" -Force

New-Item -ItemType File -Path "src\components\common\Loading.tsx" -Force
New-Item -ItemType File -Path "src\components\common\ErrorBoundary.tsx" -Force
New-Item -ItemType File -Path "src\components\common\index.ts" -Force

New-Item -ItemType File -Path "src\hooks\useAuth.ts" -Force
New-Item -ItemType File -Path "src\hooks\useCourses.ts" -Force
New-Item -ItemType File -Path "src\hooks\useLocalStorage.ts" -Force
New-Item -ItemType File -Path "src\hooks\index.ts" -Force

New-Item -ItemType File -Path "src\lib\auth.ts" -Force
New-Item -ItemType File -Path "src\lib\api.ts" -Force
New-Item -ItemType File -Path "src\lib\utils.ts" -Force
New-Item -ItemType File -Path "src\lib\validations.ts" -Force
New-Item -ItemType File -Path "src\lib\constants.ts" -Force

New-Item -ItemType File -Path "src\store\authStore.ts" -Force
New-Item -ItemType File -Path "src\store\courseStore.ts" -Force
New-Item -ItemType File -Path "src\store\userStore.ts" -Force
New-Item -ItemType File -Path "src\store\index.ts" -Force

New-Item -ItemType File -Path "src\types\auth.ts" -Force
New-Item -ItemType File -Path "src\types\course.ts" -Force
New-Item -ItemType File -Path "src\types\user.ts" -Force
New-Item -ItemType File -Path "src\types\index.ts" -Force

New-Item -ItemType File -Path "src\styles\components.css" -Force
New-Item -ItemType File -Path "src\styles\utilities.css" -Force

New-Item -ItemType File -Path ".env.local" -Force
New-Item -ItemType File -Path ".env.example" -Force
New-Item -ItemType File -Path "next.config.js" -Force
New-Item -ItemType File -Path "tailwind.config.js" -Force
New-Item -ItemType File -Path "tsconfig.json" -Force
New-Item -ItemType File -Path "postcss.config.js" -Force

New-Item -ItemType File -Path "public\images\logo.svg" -Force
New-Item -ItemType File -Path "public\images\placeholder.jpg" -Force
New-Item -ItemType File -Path "public\icons\favicon.ico" -Force

Write-Host "Estructura creada exitosamente!" -ForegroundColor Green
