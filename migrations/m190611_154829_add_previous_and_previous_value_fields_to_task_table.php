<?php

use yii\db\Migration;

/**
 * Class m190611_154829_add_previous_and_previous_value_fields_to_task_table
 */
class m190611_154829_add_previous_and_previous_value_fields_to_task_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
		$this->addColumn('{{%task}}', 'state', $this->integer()->defaultValue(0));
		$this->addColumn('{{%task}}', 'previous_task_id', $this->integer());
		$this->addColumn('{{%task}}', 'previous_task_state', $this->integer());

        // creates index for column `previous_task_id`
        $this->createIndex(
            'idx-task-previous_task_id',
            '{{%task}}',
            'previous_task_id'
        );

        // add foreign key for table `task`
        $this->addForeignKey(
            'fk-task-previous_task_id',
            '{{%task}}',
            'previous_task_id',
            'task',
            'id',
            'CASCADE'
        );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        // drops foreign key for table `user`
        $this->dropForeignKey(
            'fk-task-previous_task_id',
            '{{%task}}'
        );
        
        // drops index for column `user_id`
        $this->dropIndex(
            'idx-task-previous_task_id',
            '{{%task}}'
        );

        $this->dropColumn('{{%task}}', 'state');
        $this->dropColumn('{{%task}}', 'previous_task_id');
        $this->dropColumn('{{%task}}', 'previous_task_state');
    }
}
