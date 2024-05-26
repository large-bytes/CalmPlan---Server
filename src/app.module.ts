import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://tomfyfe:lgVAYj34yumNoMHT@offical.owwmlam.mongodb.net/?retryWrites=true&w=majority&appName=offical/CalmPlan',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
