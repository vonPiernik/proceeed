<?php

namespace app\models;

use Yii;
use Da\User\Model\User;

/**
 * This is the model class for table "procedure".
 *
 * @property int $id
 * @property string $name
 * @property int $user_id
 *
 * @property User $user
 * @property Task[] $tasks
 */
class Procedure extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'procedure';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['name', 'user_id'], 'required'],
            [['user_id'], 'integer'],
            [['name'], 'string', 'max' => 255],
            [['name'], 'unique'],
            [['user_id'], 'exist', 'skipOnError' => true, 'targetClass' => User::className(), 'targetAttribute' => ['user_id' => 'id']],
            [['tasks'], 'required']
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => Yii::t('app', 'ID'),
            'name' => Yii::t('app', 'Name'),
            'user_id' => Yii::t('app', 'User ID'),
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getUser()
    {
        return $this->hasOne(User::className(), ['id' => 'user_id']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getTasks()
    {
        return $this->hasMany(Task::className(), ['procedure_id' => 'id']);
    }

    /**
     * {@inheritdoc}
     * @return ProcedureQuery the active query used by this AR class.
     */
    public static function find()
    {
        return new ProcedureQuery(get_called_class());
    }
}
